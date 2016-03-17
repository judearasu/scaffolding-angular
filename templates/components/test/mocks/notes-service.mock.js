var MockTestService = (function() {

    return {
        getTestNotes: getTestNotes
    };

    function getTestNotes() {
        return {
            "header": {
                "code": 200,
                "message": "Test retrieved successfully.",
                "id": null,
                "devMsg": null
            },
            "body": {
                "testList": [{
                    "test1": "test",
                    "test2": "test",
                    "test3": "test",
                    "test4": "test",
                    "test5": "test"
                }]
            }
        };
    }

})();
