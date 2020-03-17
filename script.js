function insert(num) {
    document.form.textView.value = document.form.textView.value + num;
   
}
function parents () {
    var exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = `(${exp})`;
    }
    
}
function sqrt(){
    var exp = document.form.textView.value;
    document.form.textView.value = Math.sqrt(exp);
}
function clean() {

    document.form.textView.value = '';
}
function back() {
    var exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);
    
}
function equal() {
    var exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}
function checkKey(key) {
    if (event.key == 'Enter' || event.code == 'NumpadEnter') {
        equal();
        
    }
    if (event.code == 'Delete') {
        clear();
       
    }
       return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' || key == '*' || key == '/' || key == 'ArrowLeft' || key == 'ArrowRight' || key == '.' || key == 'Backspace';
}