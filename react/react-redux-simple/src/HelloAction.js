const HelloAction = (newText) => {
  console.log('[HelloAction.js] HelloAction() :: call..!')
  return {
    type: 'CHANGE_TEXT',
    text: newText
  }
}

export default HelloAction;
