var followers_count = 0;
function increaseCount(){
    followers_count++;
    if (followers_count%10 === 0){
        alert("Followers count is "+followers_count);
    }
    document.getElementById('countDisplay').innerHTML=followers_count;
}
