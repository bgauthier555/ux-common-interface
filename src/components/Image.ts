import { Component } from '../Component';
/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
class Image extends Component {

    /**
     *
     * @param id
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this.template = '<img {attributes}/>';
        this.componentClassName = 'Image';


    }

    /**
     * Returns component meta data
     * @returns {object}
     */
    public static getMetaData() : any
    {

        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Image',
            description : 'HTML Image element',
            category : 'content',
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : true,
                    comments : '',
                }
            },
            example : '',
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'dEKKeN',
                    title : 'Image example',
                    height : 400,
                }
            ],
        };


    }


}


export { Image };