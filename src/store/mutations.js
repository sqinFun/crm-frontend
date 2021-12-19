export default {
  setData(state, {path, value}) {
    let pathList = path.split('/')
    let target = pathList.pop()
    let stateDataPath = pathList.reduce((acc, cur)=> acc[cur] || (acc[cur] = {}), state)
    stateDataPath[target] = window._.cloneDeep(value)
  }
}
