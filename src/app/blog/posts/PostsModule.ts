import { NgModule } from "@angular/core";
import { CreatePostDialogComponent } from "./dialogs/CreatePostDialogComponent";
import { PostListModule } from "./list/PostListModule";
import { PostResource } from "./services/PostResource";
import { PostService } from "./services/PostService";


@NgModule ({
    imports:[
        PostListModule,
        
    ],
    exports:[
        PostListModule,        
    ],
    declarations:[
        CreatePostDialogComponent,
    ],

    entryComponents:[CreatePostDialogComponent],
         
    providers:[
        PostService,
        PostResource,
    ],
})
export class PostsModule {
}