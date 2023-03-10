import { Method } from "../types";
import { path2LCamal, pyReq2paramsDecl, pyResType, pyComments } from "./utils";

export function pyPost(path: string, post?: Method) {
    const crtItemPath = path;
    if (post !== undefined) {
        const decl = pyReq2paramsDecl(post.req);
        const res = pyResType(path2LCamal(crtItemPath), post.res);
        return `
${res.decl}
def post${path2LCamal(crtItemPath)}(${decl})\
 -> ${res.name} : '''
## POST ${crtItemPath}
${pyComments(post)}
'''`
    } else {
        return "";
    }
}