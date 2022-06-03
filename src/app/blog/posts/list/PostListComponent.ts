import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostListItem } from "../services/dataModel/PostListItem";
import { PostService } from "../services/PostService";
import { MatDialog } from "@angular/material/dialog";
import { CreatePostDialogComponent } from "../dialogs/CreatePostDialogComponent";

@Component({
    selector:'app-post-list',
    templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit {
    public postList: Observable<PostListItem[]>;
    
    public displayedColumns: string[] = ['id','title', 'subTitle', 'imageUrl',]
    
    constructor(private postService: PostService,
                private matDialog: MatDialog) {
        }
    ngOnInit() {
        this.postList = this.postService.getAllPostItem();
    
        
    }

    public createPost() {
        this.matDialog.open(CreatePostDialogComponent);
    }
}