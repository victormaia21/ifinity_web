import FormMidia from "@/components/Login/FormMidia/FormMidia";
import ImagemCidade from "@/components/Login/ImagemCidade/ImagemCidade";


export default function Login() {
    return (
        <div className="grid sm:flex">
            <FormMidia />
            <ImagemCidade />
        </div>
    )
}