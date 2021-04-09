var jsonData = {
    "LANGUAGE": "CHS" /*CHS 簡中 CHT 繁中*/
}

$.ajax({
    type:'post',
    url:'http://18.179.104.139:8080/analyze_robot/getJsonCompanyNumAndCategoryData',
    contentType:'application/json;charset=utf-8',//指定为json类型
    data:JSON.stringify(jsonData),
    success:function(data){
        document.getElementById("companyNum").textContent = data.companyNum
    }
});
