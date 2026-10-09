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

    function newSlider (slid) {
        setSlider(slider + slid)
        nextSwitcher(slider + slid)
    }

    let mas = nextSwitcher (slider)
    return (
        <div className="page-switcher">
            {slider !== 1 && <Switch setActive={newSlider}>⬅</Switch>}
            {mas.map((item) => (
                <Switch
                onActive = {onActive}
                setActive ={setActive}>
                    {item}
                </Switch>
            ))}
            {slider !== maxSlide && <Switch setActive={newSlider}>⮕</Switch>}
        </div>
    )
}

export default PageSwitcher