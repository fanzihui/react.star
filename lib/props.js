import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            light: 0,
            star: 4,
            icon: '★',
            disable: false,
            wrapClass: 'star-warp',
            prefixClass: 'star',
        },
        propTypes: {
            num: PropTypes.number,
            star:PropTypes.number,
            icon: PropTypes.string,
            disable: PropTypes.bool,
            warpClass: PropTypes.string,
            prefixClass: PropTypes.string,
        }
    })
}
