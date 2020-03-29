var counter=new Vue({
				el:'#outer',
				data:{
					inputMsg:'',
					nextFunction:'',
					result:'',
					mainShow:'',
					icon:''
				},
				methods:{
					showNum7:function(){this.inputMsg+='7';this.mainChange()},
					showNum8:function(){this.inputMsg+='8';this.mainChange()},
					showNum9:function(){this.inputMsg+='9';this.mainChange()},
					showNum4:function(){this.inputMsg+='4';this.mainChange()},
					showNum5:function(){this.inputMsg+='5';this.mainChange()},
					showNum6:function(){this.inputMsg+='6';this.mainChange()},
					showNum1:function(){this.inputMsg+='1';this.mainChange()},
					showNum2:function(){this.inputMsg+='2';this.mainChange()},
					showNum3:function(){this.inputMsg+='3';this.mainChange()},
					showNum_:function(){
						if(this.inputMsg==''){this.inputMsg+='-';this.mainChange()
						}else{
							this.mainChange();
						}
					},	
					showNum0:function(){this.inputMsg+='0';this.mainChange()},
					showNumDot:function(){
						if(this.inputMsg.lastIndexOf('.')==-1){
							if(this.inputMsg==''){
								this.inputMsg='0.';
							}else{
							this.inputMsg+='.'}
						};
						this.mainChange();
					},
					
					Mul:function(x,y){
						return parseFloat(x)*parseFloat(y)
					},
					Div:function(x,y){
						return parseFloat(x)/parseFloat(y)
					},
					Add:function(x,y){
						return parseFloat(x)+parseFloat(y)
					},
					Min:function(x,y){
						return parseFloat(x)-parseFloat(y)
					},
					
					btnMul:function(){
						if(this.inputMsg==''){
							if(this.result==''){
								this.nextFunction='';
							}else{
								this.nextFunction='mul';
							};
						}else{
							switch(this.nextFunction){
								case '':this.result=this.inputMsg;break;
								case 'mul' : this.result=this.Mul(this.result,this.inputMsg);break;
								case 'div' : this.result=this.Div(this.result,this.inputMsg);break;
								case 'add' : this.result=this.Add(this.result,this.inputMsg);break;
								case 'min' : this.result=this.Min(this.result,this.inputMsg);break;
							}
						this.nextFunction='mul';
						this.inputMsg='';
						}
						this.mainChange();
					},
					btnDiv:function(){
						if(this.inputMsg==''){
							if(this.result==''){
								this.nextFunction='';
							}else{
								this.nextFunction='div';
							};
						}else{
							switch(this.nextFunction){
								case '':this.result=this.inputMsg;break;
								case 'mul' : this.result=this.Mul(this.result,this.inputMsg);break;
								case 'div' : this.result=this.Div(this.result,this.inputMsg);break;
								case 'add' : this.result=this.Add(this.result,this.inputMsg);break;
								case 'min' : this.result=this.Min(this.result,this.inputMsg);break;
							}
						this.nextFunction='div';
						this.inputMsg='';
						}
						this.mainChange();
					},
					btnAdd:function(){
						if(this.inputMsg==''){
							if(this.result==''){
								this.nextFunction='';
							}else{
								this.nextFunction='add';
							};
						}else{
							switch(this.nextFunction){
								case '':this.result=this.inputMsg;break;
								case 'mul' : this.result=this.Mul(this.result,this.inputMsg);break;
								case 'div' : this.result=this.Div(this.result,this.inputMsg);break;
								case 'add' : this.result=this.Add(this.result,this.inputMsg);break;
								case 'min' : this.result=this.Min(this.result,this.inputMsg);break;
							}
						this.nextFunction='add';
						this.inputMsg='';
						}
						this.mainChange();
					},
					btnMin:function(){
						if(this.inputMsg==''){
							if(this.result==''){
								this.nextFunction='';
							}else{
								this.nextFunction='min';
							};
						}else{
							switch(this.nextFunction){
								case '':this.result=this.inputMsg;break;
								case 'mul' : this.result=this.Mul(this.result,this.inputMsg);break;
								case 'div' : this.result=this.Div(this.result,this.inputMsg);break;
								case 'add' : this.result=this.Add(this.result,this.inputMsg);break;
								case 'min' : this.result=this.Min(this.result,this.inputMsg);break;
							}
						this.nextFunction='min';
						this.inputMsg='';
						}
						this.mainChange();
					},
					btnCal:function(){
						switch(this.nextFunction){
							case '':if(this.inputMsg!=''){this.result=this.inputMsg;}else{this.result=this.result;}break;
							case 'mul' : this.result=this.Mul(this.result,this.inputMsg);break;
							case 'div' : this.result=this.Div(this.result,this.inputMsg);break;
							case 'add' : this.result=this.Add(this.result,this.inputMsg);break;
							case 'min' : this.result=this.Min(this.result,this.inputMsg);break;
						}
						
						this.nextFunction='';
						this.inputMsg='';
						this.mainChange();
					},
					btnCle:function(){
						this.inputMsg='',
						this.nextFunction='',
						this.result='',
						this.mainShow=''
					},
					btnBac:function(){
						this.inputMsg=this.inputMsg.slice(0,this.inputMsg.length-1);
						this.mainChange();
					},
					
					
					mainChange:function(){
						switch(this.nextFunction){
							case '' : this.icon='';break;
							case 'mul' : this.icon='*';break;
							case 'div' : this.icon='/';break;
							case 'add' : this.icon='+';break;
							case 'min' : this.icon='-';break;
						};
						if(this.result==''){
							this.icon='';
						}else{
						this.mainShow=`${this.result}${this.icon}${this.inputMsg}`;
						}
					},
					
				}
			})