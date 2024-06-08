// print i value after every second

function print() {
    for(var i = 1; i <= 5; i++) {
        function p(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        p(i);
    }
}

print();