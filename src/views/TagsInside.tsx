import React from "react"
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "../Components/layout";

type Params = {
    id: string
}

function TagsInside() {
    const {findTag} = useTags()
    let {id} = useParams<Params>();
    const tag = findTag(id?parseInt(id):1)
    return (
        <Layout>
            <div>{tag.name}</div>
        </Layout>

    );
}

export {TagsInside}