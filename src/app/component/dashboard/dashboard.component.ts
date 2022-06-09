import { Component, Input, OnInit } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr'; 
import { Subscription } from 'rxjs'; 
import { FrontendService } from 'src/app/service/frontend.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() userName: string = ''; 
  private usersSub: Subscription; 
  private messagesSub: Subscription; 
  private errorsSub: Subscription; 
 
  users: any = []; 
  messages: any = []; 
  msgtext: string = ''; 
  first:string=''
 
  constructor(private chat:FrontendService,private toastr:ToastrService) { 
    this.errorsSub=this.chat.error.asObservable().subscribe((err: string)=>{ 
      if(err){ 
        this.toastr.error(err, 'Something went Wrong'); 
      } 
    }); 
    this.usersSub=this.chat.users.asObservable().subscribe((users:any)=>{ 
      if(users){ 
         this.users=[]; 
         Object.entries(users).forEach((userData)=>{ 
           this.users.push({ 
             id:userData[0], 
             name:userData[1], 
           }); 
         }); 
      } 
    }); 
    this.messagesSub=this.chat.message.asObservable().subscribe((msg:any)=>{ 
      if(msg){ 
         if(typeof msg !== 'string'){ 
           this.messages.push(msg); 
         }else { 
           this.toastr.info(msg); 
         } 
      } 
    }); 
   } 
 
  ngOnInit(): void { 
    if(this.userName.length>0){ 
      this.chat.joinRoom(this.userName); 
    } 
  } 
  sendMessage():void{ 
    if(this.msgtext.length>0){ 
      this.chat.sendMessage(this.msgtext); 
      this.msgtext=''; 
      console.log(this.messagesSub) 
      console.log(this.users)
      console.log("hi",this.users[0].id)
      this.first=this.users[0].id

      

    } 
  } 

}
