import { observable, action, computed } from 'mobx'


export class PicStore{
    @observable pictures = []
    @observable faveuritrsPictures = []
    @action addPicture =(picture, picId, picDescription)=>{
        this.pictures.push({picture: picture, picId: picId, picDescription: picDescription})
    }
    @action addPictureToFaves=(picture, picId, picDescription)=>{

            let isIn = false
            for(let pic of this.faveuritrsPictures){
                if(pic.picId == picId){
                    alert("already added!")
                    isIn = true  
                } 
            }
            if(isIn == false)
            {
                let newFavePhoto = {picture: picture, picId: picId, picDescription: picDescription}
                this.faveuritrsPictures.push(newFavePhoto)

            }
    }
    @action DeleteFromFaves=(picId)=>{
        for(let pic in this.faveuritrsPictures){
            if(this.faveuritrsPictures[pic].picId == picId){
                this.faveuritrsPictures.splice(pic,1)
            } 
        }
    }
    @action changeDescription=(picId, newDescription)=>{
        let picture = this.pictures.find(p=> p.picId === picId)
        if(picture){
            picture.picDescription = newDescription
        }
    }
    @computed get numberOfPictures (){
        return this.pictures.length
    }
    @computed get numberOfFavePictures (){
        return this.faveuritrsPictures.length
    }
}