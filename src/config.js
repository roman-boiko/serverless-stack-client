export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_9XH6HoLMM3fmkMhZBS8Sk04u00bhfSL9Uf",
    s3: {
        REGION: "eu-central-1",
        BUCKET: "rboiko-notes-app-uploads"
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://ea92qtaxj6.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_Gcx5x7MsD",
        APP_CLIENT_ID: "3acblmmhik7ah35vr41daemrl2",
        IDENTITY_POOL_ID: "eu-central-1:aaad88a7-9d17-4f83-aca3-b57b4ff2e6d4"
    }
};