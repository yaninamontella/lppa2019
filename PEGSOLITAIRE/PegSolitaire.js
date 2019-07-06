const initialState=[
  [undefined, undefined, 1, 1, 1, undefined, undefined],
  [undefined, undefined, 1, 1, 1, undefined, undefined],
  [1, 1, 1, 1, 1, 1,1],
  [1, 1, 1, 0, 1, 1,1],
  [1, 1, 1, 1, 1, 1,1],
  [undefined, undefined, 1, 1, 1, undefined, undefined],
  [undefined, undefined, 1, 1, 1, undefined, undefined]
];

//codigo html en js
var dynamicBoard='<ul>'

for (var i=0;i < initialState.length; i++)
{
  dynamicBoard+='<li>'
  for (var j=0;j < initialState[i].length; j++)
  {
    dynamicBoard+='<button></button>';
  }
    dynamicBoard+='</li>';
};

dynamicBoard+='</ul>';
window.onload=function()
{
  //obtenemos el elemento dibujado en el HTML
  const boardElement=document.getElementById('board');

  //asignamos dynamicBoard
  boardElement.innerHTML=dynamicBoard
};
