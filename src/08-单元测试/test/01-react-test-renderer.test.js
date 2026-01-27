import ShallowRender from 'react-test-renderer/shallow'  //导入测试模块
import App from '../App'

describe("react-test-renderer", () => {
    //单元测试 it
    it("app 的名字是 jerry-todolist", () => {
        const render = new ShallowRender()  //虚拟 DOM
        render.render(<App />)
        // console.log(render.getRenderOutput());
        // console.log(render.getRenderOutput().props);
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
        expect(render.getRenderOutput().props.children[0].props.children).toBe("Jerry-todolist")
    })
})