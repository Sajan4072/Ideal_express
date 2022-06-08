import { GetServerSideProps, NextPage } from "next"
import Form from "../../components/user/Form"
import Container from "../../layouts/Container"

const create: NextPage = () => {
    return (
        <Create />
    )
}
export default create

const Create = () => {
    return (
        <Container title="Create New User">
            <Form edit={false} />
        </Container>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            page: '/user-create',
            title: 'Create User'
        }
    }
}