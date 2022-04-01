import { Component, Input, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'tna-avatar-customizer',
  templateUrl: './avatar-customizer.component.html',
  styleUrls: ['./avatar-customizer.component.scss']
})
export class AvatarCustomizerComponent implements OnInit {
  @Input() url: any = {};
  public uploadProgress$?: Observable<any>;
  public newURL?: string;
  public model: any = {};
  public defaults: any = [
    {
      'advanced': {
        url: 'https://avatars.dicebear.com/api/',
        sprites: [
          'pixel-art',
          'avataars',
          'bottts',
          'identicon',
          'initials',
          'micah',
          'jdenticon',
          'gridy',
        ],
        moods: [
          'happy',
          'sad'
        ],
        baseOptions: {
          seed: 'your-username',
          dataUri: false,
          flip: false,
          rotate: 0,
          scale: 100,
          radius: 0,
          size: 1,
          backgroundColor: '%233ed12b',
          translateX: 0,
          translateY: 0
        }
      },
      'basic': {
        url: 'https://ui-avatars.com/api/'
      }
    }
  ];

  constructor(private storage: StorageService) { }

  configAdvanced(...args: any) {
    const {url, sprites, baseOptions} = this.defaults['advanced'];
    const {sprite, options} = args;
  }



  uploadAvatarToStorage(uid: string, file: File) {
    const collection = `avatars`;
    const {task, ref} = this.storage.upload(file, collection, uid);
    this.uploadProgress$ = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => ref.getDownloadURL().subscribe((url: string) => this.newURL = url))
    )

  }

  ngOnInit(): void {
  }

}
