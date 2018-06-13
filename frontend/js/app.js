function MainService(){
    var self=this;

    self.content_classes=1;
    self.content_search=2;
    self.content_single=3;

    self.content=self.content_classes;

    self.change_content=function (num) {
        self.content=num;
    };

    self.get_current_content=function () {
        return self.content;
    };

    self.if_content_classes=function () {
        return (self.content==self.content_classes);
    };

    self.if_content_search=function () {
        return (self.content==self.content_search);
    };

    self.if_content_single=function () {
        return (self.content==self.content_single);
    }
}

angular.module("studyAtSjtu",['chart.js']).service('MainService',[MainService])
    .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
        chartColors: ['rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)','rgba(65,105,225,0.3)'],
        responsive: true,
        fill:false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
        showLines: true,
    });
}])
    .controller("ContentCtl",["MainService","$scope","$sce",function(MainService,$scope,$sce){
    var self=this;

    self.popout="pp";

    self.popout_s="pps";

        self.popout_rs="pprs";

    self.classes=[{num:1,name:"数据结构",tasks:{task1:{num:1,comment:"实验1很长很长很长很长很长很长123123123",complete:false,release:"2/14",ddl:"3/14",detail:"####任务详情\n\n    如此这般\n    如此这般",outdate:false},task2:{num:2,comment:"实验2",complete:true,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:false},task3:{num:3,comment:"实验3",complete:true,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:true}},info:"上海交通大学是我国历史"},
        {numid:2,name:"计算机网",tasks:{task1:{num:1,comment:"实验1很长很长很长很长很长很长123123123",complete:false,release:"2/14",ddl:"3/14",detail:"##任务详情\n\n    如此这般",outdate:false},task2:{num:2,comment:"实验2",complete:true,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:false},task3:{num:3,comment:"实验3",complete:false,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:true}},info:"上海交通大学是我国历史最悠久、享誉海内外的著名高等学府之一，是教育部直属并与上海市共建的全国重点大学。经过122年的不懈努力，上海交通大学已经成为一所“综合性、研究型、国际化”的国内一流、国际知名大学。 "},
        {num:3,name:"编译原理",tasks:{task1:{num:1,comment:"实验1很长很长很长很长很长很长123123123",complete:false,release:"2/14",ddl:"3/14",detail:"##任务详情\n\n    如此这般",outdate:false},task2:{num:2,comment:"实验2",complete:true,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:false},task3:{num:3,comment:"实验3",complete:false,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:true}},info:"上海交通大学是我国历史最悠久、享誉海内外的著名高等学府之一，是教育部直属并与上海市共建的全国重点大学。经过122年的不懈努力，上海交通大学已经成为一所“综合性、研究型、国际化”的国内一流、国际知名大学。 "},
        {num:4,name:"Windows",tasks:{task1:{num:1,comment:"实验1很长很长很长很长很长很长123123123",complete:false,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:false},task2:{num:2,comment:"实验2",complete:true,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:false},task3:{num:3,comment:"实验3",complete:false,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:true}},info:"上海交通大学是我国历史最悠久、享誉海内外的著名高等学府之一，是教育部直属并与上海市共建的全国重点大学。经过122年的不懈努力，上海交通大学已经成为一所“综合性、研究型、国际化”的国内一流、国际知名大学。 "}
        ];

    self.search_result=[{num:5,name:"操作系统-薛质-2018",year:2018,teacher:"薛质",rating:4,score:85,people:55},
        {num:6,name:"企业管理-李建华-2018",year:2018,teacher:"李建华",rating:2,score:80,people:60},
        {num:7,name:"计算机网-蒋兴浩-2018",year:2018,teacher:"蒋兴浩",rating:3,score:90,people:55},
        {num:8,name:"嵌入式-陆海宁-2018",year:2018,teacher:"陆海宁",rating:5,score:95,people:75}];

    self.comment_css=function (complete,outdate) {
        if(complete){
            if(outdate)
                return  {"task-complete-outdate":true,"task-complete":true};
            else return "task-complete";
        }

        else {
            if(outdate)
                return "task-miss-outdate";
            else return "";
        }
    };

    self.change_content=MainService.change_content;

    self.get_current_content=function () {
        return MainService.get_current_content();
    };

    self.if_content_classes=MainService.if_content_classes;

    self.if_content_search=MainService.if_content_search;

    self.if_content_single=MainService.if_content_single;

    self.get_class_intro=function (record) {
        return ("平均分： "+record.score+"; 选课人数： "+record.people);
    };

    self.get_star_rating_value=function (num,rating) {
        if (num<=rating)
            return "star-checked";
        else return ""

    };

    self.from_index='首页';

    self.from_search='搜索结果';

    self.prev_tab='首页';

    self.return_to_prev_tab=function(){
      if (self.prev_tab==self.from_index)
          MainService.change_content(MainService.content_classes);
      else
          MainService.change_content(MainService.content_search);
    };

    self.current_single_num=0;

    self.current_single={num:5,name:"操作系统-薛质-2018",year:2018,finish:true,teacher:"薛质",rating:4,score:85,people:55,failrate:"3%",scorelist:[70,70,70,70,80,80,81],history_average:[70,71,70,69,67,72]};

    self.current_single_comments={page:1,maxpage:5,comments:[{user:"anonymous",time:"2017/7/1",text:"不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错",
            rating:4},{user:"anonymous",time:"2017/7/1",text:"不好",rating:2},{user:"anonymous",time:"2017/7/1",text:"还行",rating:3}]};

    $scope.labels=['2010','2011','2012','2013','2014','2015','2016','2017','2018'];

    $scope.data=[87,88,85,89,84,80,82,85,82];

    $scope.labels2 = ['<60', '60-65', '65-70', '70-75', '75-80', '80-85', '85-90','90-95','95-100'];
    $scope.series2 = ['分布'];
    $scope.data2=[3,4,5,6,6,7,6,3,1];


        $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $scope.options = {
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                },
            }],
            yAxes: [
                {
                    id: 'AvgScore',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: 'Average Score'
                    },
                    ticks: {
                        min:55,
                        max:100
                    }
                }
            ]
        }
    };

        self.compare_by_overall_score=function(a,b){
            if(a[0]<b[0]) return 1;
            else if (a[0]>b[0]) return -1;
            else return 0
        };

        self.compare_by_test_score=function(a,b){
            if(a[1]<b[1]) return 1;
            else if (a[1]>b[1]) return -1;
            else return 0
        };

    self.view_single=function (num,from) {
        self.current_single_num=num;
        self.prev_tab=from;
        self.current_single={num:5,name:"操作系统-薛质-2018",year:2018,teacher:"薛质",resources:[{name:"习题答案3",url:"#",detail:"    答案3"},{name:"习题答案2",url:"#",detail:"    答案2"},{name:"习题答案1",url:"#",detail:"    答案1"}],tasks:{task1:{num:1,comment:"实验1很长很长很长很长很长很长123123123",complete:false,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:false},task2:{num:2,comment:"实验2",complete:true,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:false},task3:{num:3,comment:"实验3",complete:true,release:"2/14",ddl:"3/14",detail:"##任务详情\n    如此这般",outdate:true}},finish:true,rating:4,score:85,people:55,failrate:"3%",scorelist:[[70,80,30],[70,80,30],[71,80,30],[60,70,30],[85,83,50],[80,40,20],[88,66,55]],history_average:[70,71,70,69,67,72]};
        self.current_single.scorelist.sort(self.compare_by_overall_score);
        MainService.change_content(MainService.content_single);
    };

    self.comment_form_user="anonymous";
    self.comment_form_ranking=1;
    self.comment_form_text="none";

    self.get_nav_class=function(index){
        var floor=Math.floor(self.current_single_comments.page/5);
        if (index==-1){
            if (floor==0) return "disabled";
            else return "";
        }else{
            if (floor+index==self.current_single_comments.page)
                return "active";
            else return "";
        }
    };

    self.get_nav_index=function(index){
        var floor=Math.floor(self.current_single_comments.page/5);
        return floor+index;
    };

    self.put_ranking=function(num){
      self.comment_form_ranking=num;
    };

    self.submit_comment=function(){
        alert(self.comment_form_user+" says "+self.comment_form_text);
    };

    self.converter=new showdown.Converter();

    self.get_trusted_html=function(text){
        return $sce.trustAsHtml(self.converter.makeHtml(text));


    };



}]).controller("SearchCtl",["MainService",function (MainService) {
    var self=this;
    self.inp="查找课程";
    self.submit_search=function () {
        MainService.change_content(MainService.content_search);
    }
}]).controller("BarCtl",["MainService",function (MainService) {
    var self=this;
    self.change_content_to_classes=function () {
        MainService.change_content(MainService.content_classes);
    }
}]);