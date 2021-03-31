longRunningOperation(() => {
    anotherLongRunningOperation(() => {
        yetAnother(() => {
            onemore(() => {
                lastone(() => {
                    console.log('where are we?');
                })
            })
        })
    })
})