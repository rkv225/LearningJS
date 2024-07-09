let counter = 0;
function getData() {
    // this would call an API to fetch data
    console.log("Fetching Data ...", counter++);
}

const executeSearch = function(action, delay) {
    let timer;
    return function() {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            action.apply(context, args);
        }, delay);
    };
}

const executeThrottleSearch = function(action, delay) {
    let allow = true;
    return function() {
        if(allow) {
            allow = false;
            let context =  this,
                args = arguments;
            action.apply(context, args);
            setTimeout(() => {
                allow = true;
            }, delay);
        }
    };
}

const onKeyUpSearchHandler = executeSearch(getData, 400);

const onButtonClickHandler = executeThrottleSearch(getData, 500);