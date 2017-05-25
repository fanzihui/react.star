import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            light: 0,
            star: 4,
            disable: false,
            wrapClass: 'star-warp',
            prefixClass: 'star',
        },
        propTypes: {
            num: PropTypes.number,
            star:PropTypes.number,
            disable: PropTypes.bool,
            warpClass: PropTypes.string,
            prefixClass: PropTypes.string,
        }
    })
}
