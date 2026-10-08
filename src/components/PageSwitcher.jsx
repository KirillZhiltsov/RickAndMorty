import Switch from './Switch';
import {useEffect, useState} from "react";
const PageSwitcher = (props) => {
    let {
        onActive,
        setActive
    } = props;

    const maxPage = 42
    const visiblePage = 10
    const maxSlide = Math.ceil(maxPage/visiblePage)
    const [slider, setSlider] = useState(1);

    function nextSwitcher (slider) {
        let first = (slider - 1) * 10
        let end = slider * 10 > maxPage ? maxPage : slider * 10
        let mas = []
        for (let i = first + 1; i <= end; i++) {
            mas.push(i)
        }
        return mas
    }

    let mas = nextSwitcher (5)
    return (
        <div className="page-switcher">
            {mas.map((item) => (
                <Switch
                onActive = {onActive}
                setActive ={setActive}>
                    {item}
                </Switch>
            ))}
        </div>
    )
}

export default PageSwitcher