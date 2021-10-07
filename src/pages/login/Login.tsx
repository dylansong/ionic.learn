import {IonButton, IonContent, IonHeader, IonInput, IonPage} from "@ionic/react";

type props = {
    onHide: () => void;
}


export const Login: React.FC<props> = ({onHide}) => {
    return (
        <IonPage>
            <IonHeader></IonHeader>
            <IonContent>
                <IonInput placeholder='email' className='primary-input'></IonInput>
                <IonInput placeholder='password' className='primary-input'></IonInput>

                <IonButton onClick={()=>onHide()}>hide</IonButton>
            </IonContent>
        </IonPage>
    )
}
