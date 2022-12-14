console.log('Contentscript injected');

// Get the price from the body
let priceTxt = document.getElementsByClassName('makeStyles-btb-27')[0].innerHTML.trim();

// Create custom style for button
let btnStyle = document.createElement('style');
btnStyle.innerHTML = `
.customBtn {
    position: absolute;
    right: 100px;
    background-color: #030656;
    border-radius: 6px;
    padding: 15px;
    border-width: 0;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    
}
// button icon style
.customBtn span.icon {
    background: url('images/favicon-16x16.png') no-repeat;
    float: left;
    width: 16px;
    height: 16px;
    padding-right: 24px;
}
`;
// Add the style to <head> of the page
document.head.appendChild(btnStyle);

// Create custom button
let customBtn = document.createElement('button');
customBtn.className = 'customBtn';
customBtn.innerHTML = '<span class="icon"></span> Budget-to-Beat: ' + priceTxt;

// Events to show/hide the tooltip that will be shown on hover
customBtn.onmouseover = function() {
    btnHoverElemShow();
};
customBtn.onmouseout = function() {
    btnHoverElemHide();
};
// Functions that will be called on mouse events
function btnHoverElemShow() {
    hoverElem.style.display = 'block';
}

function btnHoverElemHide() {
    hoverElem.style.display = 'none';
}

// Append the button to main body
const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);
parentElement.appendChild(customBtn);

// Create hover element
let hoverElem = document.createElement('div');
/*
*
* We didn't follow the previous method of assigning style here because dynamically adding style="" property
* to the div tag overwrites all previous properties. And since our btnHoverElem*() functions overwrite styles
* inline, we need to resort to adding css styles this way.
*/
hoverElem.style.cssText = `
display:none;
float:right;
margin-right:24%;
background: #7075ed;
padding: 11px;
border-radius: 6px;
color:#eee;
`;

// Add hover element to the main body
hoverElem.innerHTML = 'SOME RANDOM TEXT GOES HERE';
parentElement.appendChild(hoverElem);