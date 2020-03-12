/**
 * Created by Galina on 4/29/2019.
 */
export const updateObject = (oldObject, updatedProperties)=> {
    return {
        ...oldObject,
        ...updatedProperties
    };
};