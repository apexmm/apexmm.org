var facebookTitle='';
var facebookMsg='';
var fbShareImage='';
var pageLink='';

function facebookshare(pageID){
    if(pageID=='apexFiesta'){
        facebookTitle = "APEX FIESTA 2K17";
        facebookMsg = "Apex fiesta is the annual function program of APS. This year APS is celebrating 2nd annual function on March 20, 2017.";
        fbShareImage="apex-fiesta-2K17.jpg";
        pageLink="http://apexmm.org/apex-fiesta";
    }
        
    facebookMsg = facebookMsg.replace(/'/g, '\'');
    facebookMsg = facebookMsg.replace("®", "%C2%AE");
    facebookMsg = facebookMsg.replace("#", "%23");
    facebookMsg = facebookMsg.replace("#", "%23");
    facebookMsg = facebookMsg.replace(/\"/gi, '%22');
    facebookMsg = facebookMsg.replace(/"/g, '\\"');
        
     window.open('http://www.facebook.com/dialog/feed?app_id=422718541405827&picture=http://apexmm.org/images/'+fbShareImage+'&name='+facebookTitle+'&description='+facebookMsg+'&link='+pageLink);
}