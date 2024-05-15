"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function ArticleWrapper () {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function getArticles(){
            try{
                const response = await axios.get('https://www.jalirani.com/files/barstool.json');
                setArticles(response.data);
            }catch(error){
                console.error('Error fetching article', error);
            }
        };
        getArticles();
    }, []);
    return (
        <div>
            <ul className="core">
                {articles.map((article, index) => (
                    <li key={ index }>
                        <div className="eachwrapper">
                            <div>
                                <Link href={article.url}>
                                    <h3>{article.title}</h3>
                                </Link>
                                Comments on article: {article.comment_count}
                            </div>
                            <div className="belowtitle">
                            <div>
                                <Image
                                src={`${article.thumbnail.location}${article.thumbnail.images.small}`}
                                alt={`Preview of article "${article.title}"`}
                                width={321}
                                height={239}/>
                            </div>
                                <div>
                                    <Image
                                        src={article.author.avatar}
                                        alt={`A picture of "${article.author.name}"`}
                                        width={64}
                                        height={64}
                                    />
                                    <h5>{article.author.name}</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                ))};
            </ul>
        </div>
    );
}