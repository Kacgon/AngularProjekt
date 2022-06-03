import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiConfig } from "../../ApiConfig";
import { PostListItem } from "./dataModel/PostListItem";

@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.url +'/posts';

    constructor(private httpClient: HttpClient) {
        
    }
    public findAll(): Observable<PostListItem[]> {
        return this.httpClient.get(this.URL) as Observable<PostListItem[]>;
    }
}