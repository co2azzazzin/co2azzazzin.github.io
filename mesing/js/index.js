var i,
n = '',
r = '#FF0305',
b = '#612210',
s = '#E9A24A',
k = '#000',
c = '#10447E',
y = '#F7FD17',
mario = [
  n,n,n,r,r,r,r,r,r,n,n,n,n,
  n,n,r,r,r,r,r,r,r,r,r,r,n,
  n,n,b,b,b,s,s,s,k,s,n,n,n,
  n,b,s,b,s,s,s,s,k,s,s,s,n,
  n,b,s,b,b,s,s,s,s,k,s,s,s,
  n,b,b,s,s,s,s,s,k,k,k,k,n,
  n,n,n,s,s,s,s,s,s,s,s,n,n,
  n,n,r,r,c,r,r,r,r,n,n,n,n,
  n,r,r,r,c,r,r,c,r,r,r,n,n,
  r,r,r,r,c,c,c,c,r,r,r,r,n,
  s,s,r,c,y,c,c,y,c,r,s,s,n,
  s,s,s,c,c,c,c,c,c,s,s,s,n,
  s,s,c,c,c,c,c,c,c,c,s,s,n,
  n,n,c,c,c,n,n,c,c,c,n,n,n,
  n,b,b,b,n,n,n,n,b,b,b,n,n,
  b,b,b,b,n,n,n,n,b,b,b,b,n
];

for(i = 0; i < mario.length; i++){
  document.body.innerHTML += '<div style="background:'+mario[i]+'"></div>';
};