$(document).ready(function() {
    $("#vertical").kendoSplitter({
        orientation: "vertical",
        panes: [{
            collapsible: false,
            resizable: false,
            scrollable: false,
            size: "40px"
        }, {
            collapsible: false
        }, {
            collapsible: false,
            resizable: false,
            scrollable: false,
            size: "30px"
        }]
    });

    $("#horizontal").kendoSplitter({
        panes: [{
            collapsible: true,
            size: "15%"
        }, {
            collapsible: true
        }, {
            collapsible: true
        }]
    });

    //tree view---------------------------------------------
    var patterns = new kendo.data.HierarchicalDataSource({
        data: [{
            text: "Creational Patterns",
            expanded: true,
            url: "/creational",
            items: [{
                text: "Abstract Factory",
                url: "/abstructFactory"
            }, {
                text: "Builder",
                url:"/builder"
            },{
                text: "Factory Method",
                url:"/factoryMethod"
            },{
                text: "Prototype",
                url:"/prototype"
            },{
                text: "Singleton",
                url:"/singleton"
            }]
        }, {
            text: "Structural Patterns",
            expanded: false,
            url: "/structural",
            items: [{
                text: "Adapter",
                url:"/adapter"
            },{
                text: "Bridge",
                url:"/bridge"
            },{
                text: "Composite",
                url:"/composite"
            },{
                text: "Decorator",
                url:"/decorator"
            },{
                text: "Facade",
                url:"/facade"
            },{
                text: "Flyweight",
                url:"/flyweight"
            },{
                text: "Proxy",
                url:"/proxy"
            },]
        }, {
            text: "Behavioral Patterns",
            expanded: false,
            url: "/behavioral",
            items: [{
                text: "Chain of Responsibility",
                url:"/cor"
            },{
                text: "Command",
                url:"/command"
            },{
                text: "Interpreter",
                url:"/interpreter"
            },{
                text: "Iterator",
                url:"/iterator"
            },{
                text: "Mediator",
                url:"/mediator"
            },{
                text: "Memento",
                url:"/memento"
            },{
                text: "Observer",
                url:"/observer"
            },{
                text: "State",
                url:"/state"
            },{
                text: "Strategy",
                url:"/strategy"
            },{
                text: "Template Method",
                url:"/templateMethod"
            },{
                text: "Visitor",
                url:"/visitor"
            }]
        }]
    });



    var tree = $("#treeview").kendoTreeView({
        dataSource: patterns,
        select: function(e) {

            var url = "./patterns" + e.sender.dataItem(e.sender.parent(e.node)).url + e.sender.dataItem(e.node).url + "/details.html";
            console.info("url:", url);
            $('#middlePane').load(url);
        }
    });


    //$('#middlePane').load('./patterns/creational/abstructFactory/details.html');
});
