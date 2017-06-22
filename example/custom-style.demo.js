var React = require('react')
var Some = require('react.star').default
var App = React.createClass({
    render: function () {
        var self = this
        return (
            <div>
                <Some light={2} star={10} disable={false} icon={'♥'} />
            </div>
        )
    }
})
module.exports = App
