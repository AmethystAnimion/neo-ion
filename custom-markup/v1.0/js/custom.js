// By Amethyst Animion
// copyright 2018 Amethyst Animion
// Licensed under MIT license

window.onload = function() {
  // get body element
  elem = document.getElementsByTagName('body')[0];
  data = elem.innerHTML;
  
  // for header
  data = data.replace(/\[\[/gm, '<div class=\'header\'>');
  data = data.replace(/\]\]/gm, '</div>');
  
  // for important text
  data = data.replace(/\{\{/gm, '<i class=\'important\'>');
  data = data.replace(/\}\}/gm, '</i>');
  
  // for paragraph
  data = data.replace(/\:\:\:/gm, '<p class=\'paragraph\'>');
  data = data.replace(/\:\:/gm, '.</p>');
  
  // for mark
  data = data.replace(/\{/gm, '<mark>');
  data = data.replace(/\}/gm, '</mark>');
  
  // for code
  data = data.replace(/\[code\]/gm, '<pre class=\'code\'>');
  data = data.replace(/\[\/code\]/gm, '</pre>');
  
  // for note
  data = data.replace(/\[note\]/gm, '<pre class=\'note\'>');
  data = data.replace(/\[\/note\]/gm, '</pre>');
  
  // for progress bar placeholder
  data = data.replace(/\=\=\=/gm, '<div class=\'prog\'>');
  data = data.replace(/\=\=/gm, '</div></div>');
  
  // for progress bar width
  data = data.replace(/\[1%\]/gm, '<div class=\'pbar1\'>');
  data = data.replace(/\[2%\]/gm, '<div class=\'pbar2\'>');
  data = data.replace(/\[3%\]/gm, '<div class=\'pbar3\'>');
  data = data.replace(/\[4%\]/gm, '<div class=\'pbar4\'>');
  data = data.replace(/\[5%\]/gm, '<div class=\'pbar5\'>');
  data = data.replace(/\[6%\]/gm, '<div class=\'pbar6\'>');
  data = data.replace(/\[7%\]/gm, '<div class=\'pbar7\'>');
  data = data.replace(/\[8%\]/gm, '<div class=\'pbar8\'>');
  data = data.replace(/\[9%\]/gm, '<div class=\'pbar9\'>');
  data = data.replace(/\[10%\]/gm, '<div class=\'pbar10\'>');
  
  data = data.replace(/\[11%\]/gm, '<div class=\'pbar11\'>');
  data = data.replace(/\[12%\]/gm, '<div class=\'pbar12\'>');
  data = data.replace(/\[13%\]/gm, '<div class=\'pbar13\'>');
  data = data.replace(/\[14%\]/gm, '<div class=\'pbar14\'>');
  data = data.replace(/\[15%\]/gm, '<div class=\'pbar15\'>');
  data = data.replace(/\[16%\]/gm, '<div class=\'pbar16\'>');
  data = data.replace(/\[17%\]/gm, '<div class=\'pbar17\'>');
  data = data.replace(/\[18%\]/gm, '<div class=\'pbar18\'>');
  data = data.replace(/\[19%\]/gm, '<div class=\'pbar19\'>');
  data = data.replace(/\[20%\]/gm, '<div class=\'pbar20\'>');
  
  data = data.replace(/\[21%\]/gm, '<div class=\'pbar21\'>');
  data = data.replace(/\[22%\]/gm, '<div class=\'pbar22\'>');
  data = data.replace(/\[23%\]/gm, '<div class=\'pbar23\'>');
  data = data.replace(/\[24%\]/gm, '<div class=\'pbar24\'>');
  data = data.replace(/\[25%\]/gm, '<div class=\'pbar25\'>');
  data = data.replace(/\[26%\]/gm, '<div class=\'pbar26\'>');
  data = data.replace(/\[27%\]/gm, '<div class=\'pbar27\'>');
  data = data.replace(/\[28%\]/gm, '<div class=\'pbar28\'>');
  data = data.replace(/\[29%\]/gm, '<div class=\'pbar29\'>');
  data = data.replace(/\[30%\]/gm, '<div class=\'pbar30\'>');
  
  data = data.replace(/\[41%\]/gm, '<div class=\'pbar41\'>');
  data = data.replace(/\[42%\]/gm, '<div class=\'pbar42\'>');
  data = data.replace(/\[43%\]/gm, '<div class=\'pbar43\'>');
  data = data.replace(/\[44%\]/gm, '<div class=\'pbar44\'>');
  data = data.replace(/\[45%\]/gm, '<div class=\'pbar45\'>');
  data = data.replace(/\[46%\]/gm, '<div class=\'pbar46\'>');
  data = data.replace(/\[47%\]/gm, '<div class=\'pbar47\'>');
  data = data.replace(/\[48%\]/gm, '<div class=\'pbar48\'>');
  data = data.replace(/\[49%\]/gm, '<div class=\'pbar49\'>');
  data = data.replace(/\[50%\]/gm, '<div class=\'pbar50\'>');
  
  data = data.replace(/\[51%\]/gm, '<div class=\'pbar51\'>');
  data = data.replace(/\[52%\]/gm, '<div class=\'pbar52\'>');
  data = data.replace(/\[53%\]/gm, '<div class=\'pbar53\'>');
  data = data.replace(/\[54%\]/gm, '<div class=\'pbar54\'>');
  data = data.replace(/\[55%\]/gm, '<div class=\'pbar55\'>');
  data = data.replace(/\[56%\]/gm, '<div class=\'pbar56\'>');
  data = data.replace(/\[57%\]/gm, '<div class=\'pbar57\'>');
  data = data.replace(/\[58%\]/gm, '<div class=\'pbar58\'>');
  data = data.replace(/\[59%\]/gm, '<div class=\'pbar59\'>');
  data = data.replace(/\[60%\]/gm, '<div class=\'pbar60\'>');
  
  data = data.replace(/\[61%\]/gm, '<div class=\'pbar61\'>');
  data = data.replace(/\[62%\]/gm, '<div class=\'pbar62\'>');
  data = data.replace(/\[63%\]/gm, '<div class=\'pbar63\'>');
  data = data.replace(/\[64%\]/gm, '<div class=\'pbar64\'>');
  data = data.replace(/\[65%\]/gm, '<div class=\'pbar65\'>');
  data = data.replace(/\[66%\]/gm, '<div class=\'pbar66\'>');
  data = data.replace(/\[67%\]/gm, '<div class=\'pbar67\'>');
  data = data.replace(/\[68%\]/gm, '<div class=\'pbar68\'>');
  data = data.replace(/\[69%\]/gm, '<div class=\'pbar69\'>');
  data = data.replace(/\[70%\]/gm, '<div class=\'pbar70\'>');
  
  data = data.replace(/\[71%\]/gm, '<div class=\'pbar71\'>');
  data = data.replace(/\[72%\]/gm, '<div class=\'pbar72\'>');
  data = data.replace(/\[73%\]/gm, '<div class=\'pbar73\'>');
  data = data.replace(/\[74%\]/gm, '<div class=\'pbar74\'>');
  data = data.replace(/\[75%\]/gm, '<div class=\'pbar75\'>');
  data = data.replace(/\[76%\]/gm, '<div class=\'pbar76\'>');
  data = data.replace(/\[77%\]/gm, '<div class=\'pbar77\'>');
  data = data.replace(/\[78%\]/gm, '<div class=\'pbar78\'>');
  data = data.replace(/\[79%\]/gm, '<div class=\'pbar79\'>');
  data = data.replace(/\[80%\]/gm, '<div class=\'pbar80\'>');
  
  data = data.replace(/\[81%\]/gm, '<div class=\'pbar81\'>');
  data = data.replace(/\[82%\]/gm, '<div class=\'pbar82\'>');
  data = data.replace(/\[83%\]/gm, '<div class=\'pbar83\'>');
  data = data.replace(/\[84%\]/gm, '<div class=\'pbar84\'>');
  data = data.replace(/\[85%\]/gm, '<div class=\'pbar85\'>');
  data = data.replace(/\[86%\]/gm, '<div class=\'pbar86\'>');
  data = data.replace(/\[87%\]/gm, '<div class=\'pbar87\'>');
  data = data.replace(/\[88%\]/gm, '<div class=\'pbar88\'>');
  data = data.replace(/\[89%\]/gm, '<div class=\'pbar89\'>');
  data = data.replace(/\[90%\]/gm, '<div class=\'pbar90\'>');
  
  data = data.replace(/\[91%\]/gm, '<div class=\'pbar91\'>');
  data = data.replace(/\[92%\]/gm, '<div class=\'pbar92\'>');
  data = data.replace(/\[93%\]/gm, '<div class=\'pbar93\'>');
  data = data.replace(/\[94%\]/gm, '<div class=\'pbar94\'>');
  data = data.replace(/\[95%\]/gm, '<div class=\'pbar95\'>');
  data = data.replace(/\[96%\]/gm, '<div class=\'pbar96\'>');
  data = data.replace(/\[97%\]/gm, '<div class=\'pbar97\'>');
  data = data.replace(/\[98%\]/gm, '<div class=\'pbar98\'>');
  data = data.replace(/\[99%\]/gm, '<div class=\'pbar99\'>');
  data = data.replace(/\[100%\]/gm, '<div class=\'pbar100\'>');
  
  
  // for debugging only
  //alert(b+'\n'+d+'\n'+c)
  
  // show it on html files
  elem.innerHTML = data;
}
