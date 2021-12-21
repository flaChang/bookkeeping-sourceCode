import {useState} from "react";
import {createID} from "./lib/createID";

const defaultTags=[
    {id: createID(), name: '衣'},
    {id: createID(), name: '食'},
    {id: createID(), name: '住'},
    {id: createID(), name: '行'},
]
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1;             //防止出现循环结束没有发现id对应的i
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;         //
                break;
            }
        }
        return result
    }
    const updateTag = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id)
        const tagClone = JSON.parse(JSON.stringify(tags))
        tagClone.splice(index, 1, {id: id, name: obj.name})
        setTags(tagClone)
    }
    return {tags, setTags,findTag,updateTag}
}


export {useTags}