const categoryId=document.getElementById("categories");
let value=`<div class="cat">Categories</div>
            <div class="flex jc">
                <lable class="prel" for="pub" ><input class="checkBox" type="checkbox" value="pub" id="pub" onChanges="elementBind(this)"><label for="pub">pubs</label></lable>
                <lable class="prel" for="restaurants"><input class="checkBox" type="checkbox" id="restaurants" value="restaurants" ><label for="restaurants">Restaurants</label></lable>
                <lable class="prel" for="clubs"><input class="checkBox" type="checkbox" id="clubs"><label>clubs</label></lable>
                <lable class="prel" for="library"><input class="checkBox" type="checkbox" id="library"><label>Library</label></lable>
            </div>
`;
categoryId.innerHTML=value;
categoryId.addEventListener("change",elementBind,false);

const checkBoxArr=[];
// adding one eventListener for all the checkboxes
function elementBind(e){
    let eventtarget=e.target;
    if(eventtarget!== e.currentTarget){
       if(eventtarget.checked){
           checkBoxArr.push(eventtarget.id);
       }else{
           checkBoxArr.pop();
       }
    }
    e.stopPropagation();
    fetchingMapQuery(checkBoxArr);
};
const fetchingMapQuery=function(arr){
    console.log("array",arr);
}
