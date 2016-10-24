/**
 * Created by salho on 24.10.16.
 */
import * as poi from '../controller/poi.controller'

export default (app, router, auth, admin) => {
    router.post('/poi',auth,poi.create,poi.show)
}
