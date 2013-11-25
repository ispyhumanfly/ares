define(["dojo/request/xhr", "dojo/io-query", "dojo/json"],
       function(REQUEST, QUERY, JSON){

        var version = '1.0.0';
    
        return {

            read: function (params) {
        
                params = JSON.parse(JSON.stringify(params));
                
                var data;
            
                REQUEST.get("/documents",
                    {
                        query: QUERY.objectToQuery(params.tags),
                        handleAs: 'json',
                        headers: { "Content-Type": "application/json,charset=utf-8"}
                    }
                    ).then(function(response) {
                
                        data = response;
                    },
                    function(error) {
                        //code
                    }
                );
                
                return data;
            },
    
            write: function (params) {
        
                params = JSON.parse(JSON.stringify(params));
            
                REQUEST.put("/documents",
                    {
                        query: QUERY.objectToQuery(params.tags),
                        data: JSON.stringify(params.data),
                        handleAs: 'json',
                        headers: { "Content-Type": "application/json,charset=utf-8"}
                    }
                    ).then(function(response) {
                    
                        document.write(JSON.stringify(response));
                    },
                    function(error) {
                        //code
                    }
                );  
            },
                
            remove: function (params) {
        
                params = JSON.parse(JSON.stringify(params));
                
                var data;
            
                //REQUEST.remove("/documents",
                //    {
                //        query: QUERY.objectToQuery(params.tags),
                //        handleAs: 'json',
                //        headers: { "Content-Type": "application/json,charset=utf-8"}
                //    }
                //    ).then(function(response) {
                //
                //        data = response;
                //    },
                //    function(error) {
                //        //code
                //    }
                //);
                //
                return data;
            }
        }
    });
