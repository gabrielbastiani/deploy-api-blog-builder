"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
//-- ROTAS USER --
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const UpdateUserController_1 = require("./controllers/user/UpdateUserController");
const PhotoUpdateUserController_1 = require("./controllers/user/PhotoUpdateUserController");
const AdminCreateUserController_1 = require("./controllers/user/AdminCreateUserController");
const RoleUserController_1 = require("./controllers/user/RoleUserController");
const AdminRoleUserController_1 = require("./controllers/user/AdminRoleUserController");
const UserRoleUserController_1 = require("./controllers/user/UserRoleUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const UserAllController_1 = require("./controllers/user/UserAllController");
const ListUserController_1 = require("./controllers/user/ListUserController");
const RecoveryPasswordController_1 = require("./controllers/user/PasswordRecovery/RecoveryPasswordController");
const EmailPasswordController_1 = require("./controllers/user/PasswordRecovery/EmailPasswordController");
const AuthenticatedEmailUserController_1 = require("./controllers/user/AuthenticatedEmailUserController");
const ListExactUserController_1 = require("./controllers/user/ListExactUserController");
const DeleteUserController_1 = require("./controllers/user/DeleteUserController");
const PageListUsersController_1 = require("./controllers/user/PageListUsersController");
const ExportUsersController_1 = require("./controllers/user/ExportUsersController");
//-- ROTAS CATEGORY
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const UpdateCategoryController_1 = require("./controllers/category/UpdateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CategoryAllController_1 = require("./controllers/category/CategoryAllController");
const ListExactCategoryController_1 = require("./controllers/category/ListExactCategoryController");
const ListPageCategoryController_1 = require("./controllers/category/ListPageCategoryController");
const AdminListPageCategoryController_1 = require("./controllers/category/AdminListPageCategoryController");
const AllCategorysController_1 = require("./controllers/category/AllCategorysController");
//-- ROTAS ARTIGOS
const CreateArticleController_1 = require("./controllers/article/CreateArticleController");
const PublishedArticleController_1 = require("./controllers/article/PublishedArticleController");
const DatePublishedArticleController_1 = require("./controllers/article/DatePublishedArticleController");
const AllDatePublishedController_1 = require("./controllers/article/AllDatePublishedController");
const DespublishArticleController_1 = require("./controllers/article/DespublishArticleController");
const ListByCategoryController_1 = require("./controllers/article/ListByCategoryController");
const RemoveArticleController_1 = require("./controllers/article/RemoveArticleController");
const UpdateArticleController_1 = require("./controllers/article/UpdateArticleController");
const UpdateBannerArticleController_1 = require("./controllers/article/UpdateBannerArticleController");
const ListExactArticleController_1 = require("./controllers/article/ListExactArticleController");
const ListPageArticlesController_1 = require("./controllers/article/ListPageArticlesController");
const AdminDashboardPageArticlesController_1 = require("./controllers/article/AdminDashboardPageArticlesController");
const ArticlesAllController_1 = require("./controllers/article/ArticlesAllController");
const AllArticlesController_1 = require("./controllers/article/AllArticlesController");
const ListPublishedArticleController_1 = require("./controllers/article/ListPublishedArticleController");
const AllPublishedArticlesController_1 = require("./controllers/article/AllPublishedArticlesController");
const PageArticlesController_1 = require("./controllers/article/PageArticlesController");
const ListByUserController_1 = require("./controllers/article/ListByUserController");
const ListByTag1Controller_1 = require("./controllers/article/ListByTag1Controller");
const ListByTag2Controller_1 = require("./controllers/article/ListByTag2Controller");
const ListByTag3Controller_1 = require("./controllers/article/ListByTag3Controller");
const ListByTag4Controller_1 = require("./controllers/article/ListByTag4Controller");
const ListByTag5Controller_1 = require("./controllers/article/ListByTag5Controller");
//-- ROTAS TAG1
const CreateTag1Controller_1 = require("./controllers/tag1/CreateTag1Controller");
const Tag1AllController_1 = require("./controllers/tag1/Tag1AllController");
const ListTag1Controller_1 = require("./controllers/tag1/ListTag1Controller");
const ListPageTag1Controller_1 = require("./controllers/tag1/ListPageTag1Controller");
const AdminListPageTag1Controller_1 = require("./controllers/tag1/AdminListPageTag1Controller");
const UpdateTag1Controller_1 = require("./controllers/tag1/UpdateTag1Controller");
//-- ROTAS TAG2
const CreateTag2Controller_1 = require("./controllers/tag2/CreateTag2Controller");
const Tag2AllController_1 = require("./controllers/tag2/Tag2AllController");
const ListTag2Controller_1 = require("./controllers/tag2/ListTag2Controller");
const ListPageTag2Controller_1 = require("./controllers/tag2/ListPageTag2Controller");
const AdminListPageTag2Controller_1 = require("./controllers/tag2/AdminListPageTag2Controller");
const UpdateTag2Controller_1 = require("./controllers/tag2/UpdateTag2Controller");
//-- ROTAS TAG3
const CreateTag3Controller_1 = require("./controllers/tag3/CreateTag3Controller");
const Tag3AllController_1 = require("./controllers/tag3/Tag3AllController");
const ListTag3Controller_1 = require("./controllers/tag3/ListTag3Controller");
const ListPageTag3Controller_1 = require("./controllers/tag3/ListPageTag3Controller");
const AdminListPageTag3Controller_1 = require("./controllers/tag3/AdminListPageTag3Controller");
const UpdateTag3Controller_1 = require("./controllers/tag3/UpdateTag3Controller");
//-- ROTAS TAG4
const CreateTag4Controller_1 = require("./controllers/tag4/CreateTag4Controller");
const Tag4AllController_1 = require("./controllers/tag4/Tag4AllController");
const ListTag4Controller_1 = require("./controllers/tag4/ListTag4Controller");
const ListPageTag4Controller_1 = require("./controllers/tag4/ListPageTag4Controller");
const AdminListPageTag4Controller_1 = require("./controllers/tag4/AdminListPageTag4Controller");
const UpdateTag4Controller_1 = require("./controllers/tag4/UpdateTag4Controller");
//-- ROTAS TAG5
const CreateTag5Controller_1 = require("./controllers/tag5/CreateTag5Controller");
const Tag5AllController_1 = require("./controllers/tag5/Tag5AllController");
const ListTag5Controller_1 = require("./controllers/tag5/ListTag5Controller");
const ListPageTag5Controller_1 = require("./controllers/tag5/ListPageTag5Controller");
const AdminListPageTag5Controller_1 = require("./controllers/tag5/AdminListPageTag5Controller");
const UpdateTag5Controller_1 = require("./controllers/tag5/UpdateTag5Controller");
//-- ROTAS NEWSLATTER
const CreateNewslatterController_1 = require("./controllers/newslatter/CreateNewslatterController");
const RemoveNewslatterController_1 = require("./controllers/newslatter/RemoveNewslatterController");
const NewslatterAllController_1 = require("./controllers/newslatter/NewslatterAllController");
const AllNewslatterController_1 = require("./controllers/newslatter/AllNewslatterController");
const ExportNewslatterController_1 = require("./controllers/newslatter/ExportNewslatterController");
const ListPageNewslatterController_1 = require("./controllers/newslatter/ListPageNewslatterController");
//-- ROTAS CONTACTFORM
const CreateContactFormController_1 = require("./controllers/contactform/CreateContactFormController");
const RemoveContactFormController_1 = require("./controllers/contactform/RemoveContactFormController");
const ContactFormAllController_1 = require("./controllers/contactform/ContactFormAllController");
const AllContactFormController_1 = require("./controllers/contactform/AllContactFormController");
const ExportContactFormController_1 = require("./controllers/contactform/ExportContactFormController");
const ListPageContactFormController_1 = require("./controllers/contactform/ListPageContactFormController");
//-- ROTA SENDEMAILS
const SendEmailContactFormController_1 = require("./controllers/sendEmails/SendEmailContactFormController");
const SendEmailNewsController_1 = require("./controllers/sendEmails/SendEmailNewsController");
const EmailExportUsersController_1 = require("./controllers/sendEmails/EmailExportUsersController");
const EmailExportNewslattersController_1 = require("./controllers/sendEmails/EmailExportNewslattersController");
const EmailExportContactFormController_1 = require("./controllers/sendEmails/EmailExportContactFormController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./imgblog"));
//-- ROTAS USER --
router.post('/users', upload.single('file'), new CreateUserController_1.CreateUserController().handle);
router.put('/users/update', isAuthenticated_1.isAuthenticated, new UpdateUserController_1.UpdateUserController().handle);
router.put('/users/photo', isAuthenticated_1.isAuthenticated, upload.single('file'), new PhotoUpdateUserController_1.PhotoUpdateUserController().handle);
router.post('/users/admin', upload.single('file'), new AdminCreateUserController_1.AdminCreateUserController().handle);
router.put('/users/admin', new RoleUserController_1.RoleUserController().handle);
router.put('/users/update/role/admin', isAuthenticated_1.isAuthenticated, new AdminRoleUserController_1.AdminRoleUserController().handle);
router.put('/users/update/role/user', isAuthenticated_1.isAuthenticated, new UserRoleUserController_1.UserRoleUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailuserController().handle);
router.get('/users/all', isAuthenticated_1.isAuthenticated, new UserAllController_1.UserAllController().handle);
router.get('/users', new ListUserController_1.ListUserController().handle);
router.post('/recover', new EmailPasswordController_1.EmailPasswordController().handle);
router.put('/recover', new RecoveryPasswordController_1.RecoveryPasswordController().handle);
router.put('/users/authenticated', new AuthenticatedEmailUserController_1.AuthenticatedEmailUserController().handle);
router.get('/users/exact', isAuthenticated_1.isAuthenticated, new ListExactUserController_1.ListExactUserController().handle);
router.delete('/users/remove', isAuthenticated_1.isAuthenticated, new DeleteUserController_1.DeleteUserController().handle);
router.get('/users/pagesusers', isAuthenticated_1.isAuthenticated, new PageListUsersController_1.PageListUsersController().handle);
router.get('/users/export', isAuthenticated_1.isAuthenticated, new ExportUsersController_1.ExportUsersController().handle);
//-- ROTAS CATEGORY
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', new ListCategoryController_1.ListCategoryController().handle);
router.get('/category/total', isAuthenticated_1.isAuthenticated, new CategoryAllController_1.CategoryAllController().handle);
router.get('/category/all', new ListPageCategoryController_1.ListPageCategoryController().handle);
router.get('/category/admin', isAuthenticated_1.isAuthenticated, new AdminListPageCategoryController_1.AdminListPageCategoryController().handle);
router.put('/category/update', isAuthenticated_1.isAuthenticated, new UpdateCategoryController_1.UpdateCategoryController().handle);
router.get('/category/exact', new ListExactCategoryController_1.ListExactCategoryController().handle);
router.get('/category/filter', isAuthenticated_1.isAuthenticated, new AllCategorysController_1.AllCategorysController().handle);
//-- ROTAS ARTIGOS
router.post('/article', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreateArticleController_1.CreateArticleController().handle);
router.put('/article/published', isAuthenticated_1.isAuthenticated, new PublishedArticleController_1.PublishedArticleController().handle);
router.put('/article/datefuture', new DatePublishedArticleController_1.DatePublishedArticleController().handle);
router.get('/article/date', new AllDatePublishedController_1.AllDatePublishedController().handle);
router.put('/article/despublish', isAuthenticated_1.isAuthenticated, new DespublishArticleController_1.DespublishArticleController().handle);
router.delete('/article/remove', isAuthenticated_1.isAuthenticated, new RemoveArticleController_1.RemoveArticleController().handle);
router.put('/article/update', isAuthenticated_1.isAuthenticated, new UpdateArticleController_1.UpdateArticleController().handle);
router.put('/article/banner/update', isAuthenticated_1.isAuthenticated, upload.single('file'), new UpdateBannerArticleController_1.UpdateBannerArticleController().handle);
router.get('/article/exact', new ListExactArticleController_1.ListExactArticleController().handle);
router.get('/article/all', new ListPageArticlesController_1.ListPageArticlesController().handle);
router.get('/article/admin', isAuthenticated_1.isAuthenticated, new AdminDashboardPageArticlesController_1.AdminDashboardPageArticlesController().handle);
router.get('/article', isAuthenticated_1.isAuthenticated, new ArticlesAllController_1.ArticlesAllController().handle);
router.get('/article/filter', isAuthenticated_1.isAuthenticated, new AllArticlesController_1.AllArticlesController().handle);
router.get('/article/search', new AllPublishedArticlesController_1.AllPublishedArticlesController().handle);
router.get('/article/published/blog', new ListPublishedArticleController_1.ListPublishedArticleController().handle);
router.get('/article/read', new PageArticlesController_1.PageArticlesController().handle);
router.get('/category/article', new ListByCategoryController_1.ListByCategoryController().handle);
router.get('/user/article', new ListByUserController_1.ListByUserController().handle);
router.get('/tag1/article', new ListByTag1Controller_1.ListByTag1Controller().handle);
router.get('/tag2/article', new ListByTag2Controller_1.ListByTag2Controller().handle);
router.get('/tag3/article', new ListByTag3Controller_1.ListByTag3Controller().handle);
router.get('/tag4/article', new ListByTag4Controller_1.ListByTag4Controller().handle);
router.get('/tag5/article', new ListByTag5Controller_1.ListByTag5Controller().handle);
//-- ROTAS TAG1
router.post('/tag1', isAuthenticated_1.isAuthenticated, new CreateTag1Controller_1.CreateTag1Controller().handle);
router.get('/tag1/all', isAuthenticated_1.isAuthenticated, new Tag1AllController_1.Tag1AllController().handle);
router.get('/tag1', new ListTag1Controller_1.ListTag1Controller().handle);
router.get('/tag1/page', isAuthenticated_1.isAuthenticated, new ListPageTag1Controller_1.ListPageTag1Controller().handle);
router.get('/tag1/pageAdmin', isAuthenticated_1.isAuthenticated, new AdminListPageTag1Controller_1.AdminListPageTag1Controller().handle);
router.put('/tag1/update', isAuthenticated_1.isAuthenticated, new UpdateTag1Controller_1.UpdateTag1Controller().handle);
//-- ROTAS TAG2
router.post('/tag2', isAuthenticated_1.isAuthenticated, new CreateTag2Controller_1.CreateTag2Controller().handle);
router.get('/tag2/all', isAuthenticated_1.isAuthenticated, new Tag2AllController_1.Tag2AllController().handle);
router.get('/tag2', new ListTag2Controller_1.ListTag2Controller().handle);
router.get('/tag2/page', isAuthenticated_1.isAuthenticated, new ListPageTag2Controller_1.ListPageTag2Controller().handle);
router.get('/tag2/pageAdmin', isAuthenticated_1.isAuthenticated, new AdminListPageTag2Controller_1.AdminListPageTag2Controller().handle);
router.put('/tag2/update', isAuthenticated_1.isAuthenticated, new UpdateTag2Controller_1.UpdateTag2Controller().handle);
//-- ROTAS TAG3
router.post('/tag3', isAuthenticated_1.isAuthenticated, new CreateTag3Controller_1.CreateTag3Controller().handle);
router.get('/tag3/all', isAuthenticated_1.isAuthenticated, new Tag3AllController_1.Tag3AllController().handle);
router.get('/tag3', new ListTag3Controller_1.ListTag3Controller().handle);
router.get('/tag3/page', isAuthenticated_1.isAuthenticated, new ListPageTag3Controller_1.ListPageTag3Controller().handle);
router.get('/tag3/pageAdmin', isAuthenticated_1.isAuthenticated, new AdminListPageTag3Controller_1.AdminListPageTag3Controller().handle);
router.put('/tag3/update', isAuthenticated_1.isAuthenticated, new UpdateTag3Controller_1.UpdateTag3Controller().handle);
//-- ROTAS TAG4
router.post('/tag4', isAuthenticated_1.isAuthenticated, new CreateTag4Controller_1.CreateTag4Controller().handle);
router.get('/tag4/all', isAuthenticated_1.isAuthenticated, new Tag4AllController_1.Tag4AllController().handle);
router.get('/tag4', new ListTag4Controller_1.ListTag4Controller().handle);
router.get('/tag4/page', isAuthenticated_1.isAuthenticated, new ListPageTag4Controller_1.ListPageTag4Controller().handle);
router.get('/tag4/pageAdmin', isAuthenticated_1.isAuthenticated, new AdminListPageTag4Controller_1.AdminListPageTag4Controller().handle);
router.put('/tag4/update', isAuthenticated_1.isAuthenticated, new UpdateTag4Controller_1.UpdateTag4Controller().handle);
//-- ROTAS TAG5
router.post('/tag5', isAuthenticated_1.isAuthenticated, new CreateTag5Controller_1.CreateTag5Controller().handle);
router.get('/tag5/all', isAuthenticated_1.isAuthenticated, new Tag5AllController_1.Tag5AllController().handle);
router.get('/tag5', new ListTag5Controller_1.ListTag5Controller().handle);
router.get('/tag5/page', isAuthenticated_1.isAuthenticated, new ListPageTag5Controller_1.ListPageTag5Controller().handle);
router.get('/tag5/pageAdmin', isAuthenticated_1.isAuthenticated, new AdminListPageTag5Controller_1.AdminListPageTag5Controller().handle);
router.put('/tag5/update', isAuthenticated_1.isAuthenticated, new UpdateTag5Controller_1.UpdateTag5Controller().handle);
//-- ROTAS NEWSLATTERS
router.post('/newslatter', new CreateNewslatterController_1.CreateNewslatterController().handle);
router.delete('/newslatter/remove', isAuthenticated_1.isAuthenticated, new RemoveNewslatterController_1.RemoveNewslatterController().handle);
router.get('/newslatter', isAuthenticated_1.isAuthenticated, new NewslatterAllController_1.NewslatterAllController().handle);
router.get('/newslatter/all', isAuthenticated_1.isAuthenticated, new AllNewslatterController_1.AllNewslatterController().handle);
router.get('/newslatter/export', isAuthenticated_1.isAuthenticated, new ExportNewslatterController_1.ExportNewslatterController().handle);
router.get('/newslatter/page', isAuthenticated_1.isAuthenticated, new ListPageNewslatterController_1.ListPageNewslatterController().handle);
//-- ROTAS CONTACTFORM
router.post('/contactform', new CreateContactFormController_1.CreateContactFormController().handle);
router.delete('/contactform/remove', isAuthenticated_1.isAuthenticated, new RemoveContactFormController_1.RemoveContactFormController().handle);
router.get('/contactform', isAuthenticated_1.isAuthenticated, new ContactFormAllController_1.ContactFormAllController().handle);
router.get('/contactform/all', isAuthenticated_1.isAuthenticated, new AllContactFormController_1.AllContactFormController().handle);
router.get('/contactform/export', isAuthenticated_1.isAuthenticated, new ExportContactFormController_1.ExportContactFormController().handle);
router.get('/contactform/page', isAuthenticated_1.isAuthenticated, new ListPageContactFormController_1.ListPageContactFormController().handle);
//-- ROTA SENDEMAILS
router.post('/sendemail', new SendEmailContactFormController_1.SendEmailContactFormController().handle);
router.post('/sendemailnews', new SendEmailNewsController_1.SendEmailNewsController().handle);
router.get('/users/sendlistuser', isAuthenticated_1.isAuthenticated, new EmailExportUsersController_1.EmailExportUsersController().handle);
router.get('/newslatters/sendlist', isAuthenticated_1.isAuthenticated, new EmailExportNewslattersController_1.EmailExportNewslattersController().handle);
router.get('/contactform/sendlist', isAuthenticated_1.isAuthenticated, new EmailExportContactFormController_1.EmailExportContactFormController().handle);
