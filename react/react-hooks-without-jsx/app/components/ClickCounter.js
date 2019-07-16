define(function(require, exports, module) {
  // Import
  var React = require('react');
  // Component Style
  var style = {
      root: {}
  };
  // Component
  return ClickCounter = function() {
    const clickCountHooks = React.useState(0),
      clickCount = clickCountHooks[0],
      setClickCount = clickCountHooks[1];
    const tenTimesClickCountHooks = React.useState(0),
      tenTimesClickCount = tenTimesClickCountHooks[0],
      setTenTimesClickCount = tenTimesClickCountHooks[1];
    
    React.useEffect(() => {
      console.log('after rendering : ', tenTimesClickCount, clickCount);
    });  // render 이후 호출됨 (componentDidMount, componentDidUpdate)
    
    React.useEffect(() => {
      console.log(
      'rendered with changed tenTimesClickCount :', tenTimesClickCount);
    }, [tenTimesClickCount]);  // clickable 가 바뀔때만 호출됨
    
    console.log('before rendering : ', tenTimesClickCount, clickCount);

    return (
      React.createElement('div', { style: style.root },
        // click-count
        React.createElement('p', null,
          React.createElement('b', null, clickCount),
          ' clicked..!',
        ),
        // increase-click-butten
        React.createElement('button',
            {
              onClick: ()=>{
                if (clickCount != 0 && clickCount % 10 == 0)
                  setTenTimesClickCount(tenTimesClickCount + 1);
                setClickCount(clickCount + 1);
              }
            },
            '+1'
        ),
        // decrease-click-butten
        React.createElement('button',
          {
            onClick: ()=>{
              if (clickCount != 0 && clickCount % 10 == 0)
                setTenTimesClickCount(tenTimesClickCount - 1);
              setClickCount(clickCount - 1);
            }
          },
          '-1'
        ),
      )
    );
  };
});
