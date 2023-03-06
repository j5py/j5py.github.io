var node = '#example'
  , onInnerHTML = setInterval(() => {
        let initialValue = document.querySelector(node).innerHTML;
        if (initialValue) {
            window.knownInnerHTML = initialValue;
            clearInterval(onInnerHTML);
            var onChangeInnerHTML = setInterval(() => {
                let updatedValue = window.knownInnerHTML !== document.querySelector(node).innerHTML
                if (updatedValue) {
                    clearInterval(onChangeInnerHTML);

                    // Add your code here
                    // ...

                }
            }, 250)
        }
    }, 250)
  ;
