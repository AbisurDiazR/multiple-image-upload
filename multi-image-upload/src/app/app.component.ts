import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-image-upload';
  
  urls = []

  selectedFiles(event){
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader();
        
        reader.readAsDataURL(event.target.files[i])

        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
      }
    }
  }
}
