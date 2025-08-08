import { Component } from '@angular/core';

@Component({
  selector: 'app-add-wallpaper',
  templateUrl: './add-wallpaper.component.html',
  styleUrls: ['./add-wallpaper.component.css']
})
export class AddWallpaperComponent {
  base64Image: string | null = null;
  ConVr: string | null = null;

  onFileSelected(event: Event): void {
    debugger
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.base64Image = reader.result as string;
      };

      reader.readAsDataURL(file); 
    }
  }
}
