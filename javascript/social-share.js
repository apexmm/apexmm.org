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
        
    }else if(pageID=='apex-interschool-carnival'){
        facebookTitle = "APEX INTERSCHOOL CARNIVAL 2017";
        facebookMsg = "APEX INTERSCHOOL CARNIVAL 2017 is annual competition fest organized by Apex Public School, Marang Marcha. The purpose of organizing this carnival is to promote competitative nature in between students. APEX INTERSCHOOL CARNIVAL 2017 GRAND FINALE will be ON  15TH OCTOBER 2017.";
        fbShareImage="apex-interschool-carnival-2017.jpg";
        pageLink="http://apexmm.org/apex-interschool-carnival";
        
    }
             
    facebookMsg = facebookMsg.replace(/'/g, '\'');
    facebookMsg = facebookMsg.replace("®", "%C2%AE");
    facebookMsg = facebookMsg.replace("#", "%23");
    facebookMsg = facebookMsg.replace("#", "%23");
    facebookMsg = facebookMsg.replace(/\"/gi, '%22');
    facebookMsg = facebookMsg.replace(/"/g, '\\"');
        
     window.open('http://www.facebook.com/dialog/feed?app_id=422718541405827&picture=http://apexmm.org/images/social-share/'+fbShareImage+'&name='+facebookTitle+'&description='+facebookMsg+'&link='+pageLink);
}