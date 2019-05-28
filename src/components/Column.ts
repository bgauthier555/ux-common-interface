import { ComponentContainer } from '../ComponentContainer';

/**
 * Column component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Column extends ComponentContainer {

    /**
     *
     */
    protected size: string = '12';

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id: string) {

        super(id);

        // noinspection HtmlUnknownAttribute
        this.template = '<div {attributes}>{child_items}</div>';
        this.componentClassName = 'Column';

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
            name : 'Column',
            description : 'Column classes indicate the number of columns you’d like to use out of the possible 12 per row.',
            category : 'layout',
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : false,
                    comments : '',
                }
            },
            example : '@see Container example',
        };


    }

    /**
     *
     * @returns {null}
     */
    public getSize() : string
    {
        return this.size;
    }

    /**
     *
     * @param size
     * @returns {Column}
     */
    public setSize(size: string) : Column
    {
        this.size = size;
        return this;
    }


}

export { Column };