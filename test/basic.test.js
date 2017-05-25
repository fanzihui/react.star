import { Component } from "react"
import Some from "../lib/index"
import Test from 'react-addons-test-utils'
import { delay } from "./util"
it('className', function (done) {
    var app = Test.renderIntoDocument(<Some className="myclass" />)
    delay(done,[
        function checkClassName() {
            expect(Test.scryRenderedDOMComponentsWithClass(app, 'myclass').length)
                .toEqual(1)
            arguments[0]()
        }
    ])
})
