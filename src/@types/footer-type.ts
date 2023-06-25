type List = {
    name: string;
    link: string;
}
type ListFooter = {
    title: string;
    list: List[];
}
type SocialMedia = {
    name: string;
    link: string;
}

export interface FooterDatabase {
    listFooter: ListFooter[];
    contact: {
        email:List;
        telephone:List;
        socialMedia: {
            linkedin:SocialMedia;
            facebook:SocialMedia;
            instagram:SocialMedia;
        }
    }
}
