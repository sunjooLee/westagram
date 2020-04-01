const form = document.querySelector('.comment-form'),
    btn = document.querySelector('.cmt-btn'),
    txtArea = document.querySelector('.txtarea'),
    messageAddedArea = document.querySelector('.message-others'),
    input = document.querySelector('input');

let cmtArray = [];
let userCmtObj = {};
let userNum = 0;


function paintElement() {

    const inputVal = txtArea.value;


    //userObj 만들어서 array에 push

    userCmtObj = {

        user: userNum += 1,
        comment: inputVal

    }

    cmtArray.push(userCmtObj);


    const spanE = document.createElement('span');
    const userName = document.createElement('a');

    spanE.innerHTML = inputVal;
    userName.innerHTML = "otheruser2";

    const wrapperPE = document.createElement('p');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "삭제";

    deleteBtn.className = "delete-btn";
    deleteBtn.id = userCmtObj.user;

    wrapperPE.appendChild(userName);
    wrapperPE.appendChild(spanE);
    wrapperPE.appendChild(deleteBtn);

    messageAddedArea.appendChild(wrapperPE);

    deleteBtn.addEventListener('click', () => { deleteHandler(deleteBtn) });

}

function deleteHandler(btn) {

    console.log("this id : " + btn.id);
    const id = btn.id;
    //btn.parentNode.removeChild(btn); 이건 btn자체만 삭제
    btn.parentNode.remove();
    //btn.parentElement.remove(); parentNode와 parentElement의 practical difference는 없음

    newId = Number(id);

    cmtArray = cmtArray.filter(items => {

        return items.user !== newId

    });
    console.log(cmtArray);


}

function addComment() {

    form.addEventListener("keypress", (e) => {

        btn.style.opacity = 1;

        if (e.which === 13) {

            paintElement();
            e.preventDefault();
        };

        btn.disabled = false;

    });

    btn.addEventListener('click', () => { paintElement() });

}

addComment();