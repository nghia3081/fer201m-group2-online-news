import { Col, Container, Row } from "react-bootstrap"
import Comment from "./user/comment"

const PostDetail = () => {
    let { title, created_date, content } = {}
    return (
        <Container fluid>
            <h3 style={{ textAlign: "center" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum necessitatibus distinctio nisi asperiores magnam perspiciatis animi consectetur suscipit, amet, itaque magni laborum enim deleniti minus tempore deserunt at accusamus nihil!</h3>
            <p style={{ textAlign: 'end' }}>{new Date().toISOString()}</p>
            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti nihil nam vitae officia unde temporibus autem exercitationem eum. Perferendis quas architecto neque dolorum minus aperiam id iusto in quos.
                Odit, non nostrum. Eveniet hic nostrum iste veniam eius dolorum vitae id dolores. Ipsum minus enim similique dolorem voluptas ipsa illo eveniet itaque, illum numquam, ea accusamus, explicabo inventore a!
                Dolore, aliquam id! Cum similique tempora nulla eum ipsa! Delectus debitis harum unde esse, reprehenderit adipisci, sed minima consectetur corporis odit recusandae perspiciatis quibusdam eum aspernatur, quasi qui inventore amet?
                Accusantium id minus nemo quisquam, architecto eligendi? Magni veritatis delectus eveniet quisquam facilis dolorem praesentium omnis ratione, qui voluptas illum molestias? Nihil incidunt doloribus culpa ea porro. Corrupti, modi optio.
                Sunt, ipsam ducimus perspiciatis distinctio eum unde necessitatibus consequuntur praesentium accusamus quod. Rem aliquid quas perferendis porro odio dignissimos? Quam, ab animi numquam eaque velit doloremque error debitis? Sequi, atque.
                Quas dolores, veniam, totam distinctio saepe eos placeat pariatur cum labore voluptatem mollitia laboriosam vero rerum id eveniet quis necessitatibus sunt assumenda incidunt delectus atque sed. Voluptate alias natus fugit?
                Enim pariatur laudantium nulla vitae, est quasi omnis nam deserunt eum dolor maiores ipsum autem nihil assumenda voluptatum nostrum magni debitis quo? Ratione ab at delectus blanditiis fuga dolores officia?
                Eum qui laudantium cum commodi cumque atque sequi veniam perspiciatis praesentium neque sunt molestias eos, ullam libero suscipit tempore unde mollitia. Illum saepe optio doloremque? Placeat delectus eos expedita dolore.
                Fuga unde totam alias iure odio vero necessitatibus ullam quos rem error architecto velit consequuntur cumque, ut quidem, recusandae earum sed delectus aliquid suscipit ad, laudantium corporis tenetur quo! Aliquid.
                Tempore vero ipsa corporis dignissimos doloribus non iusto necessitatibus, voluptatum vitae quam. Illo deleniti impedit porro labore nemo molestias quia aliquid ab exercitationem, quos tempore delectus placeat, voluptates neque quas?
                Quos voluptates commodi at saepe enim aut animi, culpa ut placeat eaque nihil, temporibus dolor quidem, velit ipsam voluptas ea fuga quod sint? Voluptatem ipsam, corporis fugiat non dolorum perferendis.
                Magnam repellat cupiditate, itaque dolor voluptatibus quam illo labore sequi sit est! Id, facere neque hic similique amet error tenetur aliquid itaque suscipit magnam, tempora, dolores adipisci nihil. Illo, natus.
                Sed maxime enim quos cumque velit molestias suscipit odit vero dolores culpa iste, beatae amet ipsa? Eveniet, officia dignissimos quis quasi aperiam incidunt necessitatibus. Provident enim esse unde laboriosam sapiente.
                Minus aliquid assumenda adipisci temporibus officiis laboriosam soluta in debitis explicabo fuga deserunt vero, illo molestiae saepe porro nam, dignissimos culpa eos. Similique quisquam ducimus nam voluptates magni quam libero!
                Maiores, aliquid mollitia. Iusto perspiciatis aut quidem, laboriosam vel ratione ex ad pariatur natus voluptate tempora eveniet soluta eligendi? Alias dolores sint vero porro labore at commodi harum quasi molestias.
                Minima, eaque cum. Optio, nemo officiis explicabo architecto omnis reprehenderit consequuntur minus ratione? Quibusdam aspernatur beatae nisi excepturi provident in tenetur, libero voluptatem obcaecati rem, expedita consequuntur recusandae laborum architecto!
                Aut, deserunt facere cum voluptate reprehenderit fuga ipsa quis numquam dicta quidem suscipit ratione! Amet mollitia beatae unde necessitatibus doloremque minima ipsum tenetur repellat vitae? Reiciendis perspiciatis quasi consequatur voluptate!
                Dolor porro tempora earum quis alias eum quae odit vel nobis, dignissimos, consequuntur quisquam quaerat perferendis consequatur quas incidunt officiis nemo corporis tenetur delectus! Harum excepturi eos unde vitae facere.
                Aliquam, dicta provident consequatur officiis quasi autem dolores soluta recusandae rem eos aut esse illo non laudantium iure at cupiditate libero eum fuga facilis nobis commodi? Recusandae repudiandae eius numquam?
                Consectetur eos ad temporibus illum est accusamus vitae! Harum neque asperiores magni voluptatem natus quaerat est numquam sunt, eaque praesentium maxime, modi impedit eveniet nostrum in. Molestias illo sint recusandae.
                Harum doloribus aliquid ratione molestiae voluptas ea labore porro officia quos mollitia! Nisi quidem odit assumenda suscipit? Maxime doloribus aut deserunt quia, rem saepe libero, alias rerum quibusdam ex fugit!
                A, ex. Expedita veniam dolorum voluptatem. Est quas vero odio pariatur cumque laudantium corporis! Praesentium recusandae, ullam nulla commodi iure, porro quo optio, exercitationem vel quod iste nihil excepturi aut!
                Optio quod nisi hic assumenda voluptas illo quis autem ut iusto voluptate magnam eum officia soluta provident recusandae, sapiente aliquam qui ipsam perferendis ratione molestias? Dolorum tempore quo excepturi illum.
                Repudiandae maxime repellendus odio itaque at nisi eveniet, illo dolorem mollitia tempora harum, dolore velit minus sunt nulla cumque a ea vitae culpa reprehenderit? Labore minus excepturi modi perferendis quos.
                Ea odit iure quas voluptatum, omnis, reprehenderit placeat fugit hic culpa a corporis, totam laborum perferendis voluptate facere! Iure sint suscipit iste minus nulla voluptatum sapiente cum quis voluptas rem?
                Optio quae delectus veniam perspiciatis blanditiis ducimus consequatur voluptate quia voluptates perferendis similique suscipit earum officiis soluta minima maxime, corporis, dolor ad fugit atque alias a accusamus quam. Minus, dolore?
                Nesciunt debitis fugiat consequatur similique repellendus dolorum ullam aliquid provident eveniet, quia reprehenderit corrupti. Aliquid incidunt provident exercitationem quo totam rem explicabo placeat non excepturi! Quod illo consequuntur eius laboriosam.
                Doloribus voluptatem provident asperiores consequatur, quibusdam quos at adipisci repellendus deleniti vel hic eligendi, ipsa, voluptas saepe eveniet non et ad illo. Laudantium soluta labore nesciunt autem voluptatibus, quas tempore?
                Est vero architecto, magni sed placeat qui, quod quis, asperiores eos at illo cumque deleniti eveniet nemo? Corrupti doloribus natus veniam ab cum? Asperiores corporis distinctio non, eaque esse reprehenderit.
                Consequuntur, porro ad? Ipsum natus a corrupti doloremque? Quae, voluptatem dolorum, nobis quidem labore numquam deleniti nesciunt veritatis quo facere cupiditate aliquid velit earum assumenda, neque animi. Porro, fugit perspiciatis!
                Saepe quibusdam culpa dolor provident, alias quas maiores sit ipsam voluptatem obcaecati dolorum id dolores, temporibus magnam minus ab aperiam eius fugit accusantium a! Sed amet provident aliquid placeat. Atque.
                Provident quod voluptatum voluptas nesciunt laboriosam quo ipsam aspernatur vero. Delectus officiis repudiandae libero esse alias quo aperiam ducimus! Itaque nihil reiciendis, provident quam ea odit eum. Eos, eaque necessitatibus!
                Dolor nostrum quaerat magnam eius adipisci temporibus, fuga maiores saepe consequuntur enim assumenda totam neque dolores consectetur iste vitae tempore, mollitia quae harum in? Ea quam dolores incidunt rerum eius.
                Iure similique eaque reprehenderit architecto magni, quam eius maiores delectus ipsum possimus suscipit, harum a! Non culpa debitis quia alias ratione voluptatum praesentium temporibus, tempora asperiores nesciunt cum incidunt aspernatur.
                Laborum blanditiis nihil itaque libero. Odio libero quod temporibus accusantium repellat distinctio iusto sit, soluta pariatur neque quam unde ea voluptates magnam tempora, molestias aliquam ipsa. Voluptas ipsum ab vel?
                Rerum iure ullam aut pariatur, laudantium blanditiis quam libero delectus. Nobis consequatur suscipit earum vitae totam aspernatur velit explicabo eveniet perferendis laboriosam recusandae asperiores illo, incidunt, cumque porro fuga necessitatibus.
                Reiciendis culpa esse in incidunt consequuntur molestiae facere cupiditate? Qui illum odit earum voluptates eius quos eveniet ea nihil, ipsam, deleniti iure. Ipsa distinctio repudiandae doloremque, non accusantium laudantium deleniti!
                Cupiditate nobis, distinctio expedita voluptatum facere consequatur tempora magni unde vel similique, animi laboriosam corrupti, modi veritatis quo enim amet explicabo minima asperiores. Molestias architecto exercitationem officia culpa, magnam dolore.
                Aperiam amet sint soluta sequi repellat sed quidem error facilis facere eius, quis reiciendis dignissimos eligendi fuga ipsum libero nihil molestias mollitia? Hic, laborum cumque sequi vero aliquid nemo? Laborum.
                Voluptate fugit veniam adipisci facere rerum similique nobis in mollitia quisquam consequatur quod veritatis alias, tempora quae sequi rem eius ex maxime reprehenderit cum dolor quas fugiat. Nisi, eius esse.
                Adipisci nemo vel culpa autem vero fugit, maxime cum totam facilis quod fugiat voluptatum possimus itaque cumque nihil obcaecati! Assumenda eius repellendus delectus dolore! Expedita eaque tenetur nemo aspernatur non!
                Ad deserunt iusto illo odit quibusdam sequi alias quisquam placeat in. Quo consequuntur dignissimos animi provident aliquam ipsa explicabo est eum nisi illum, minima corporis officia iusto tempore velit assumenda!
                Facilis enim, molestias iure, similique sint, eveniet consequuntur iusto adipisci blanditiis earum assumenda aspernatur modi maxime? Explicabo dignissimos tenetur at numquam odio, sunt repellendus est facilis nam suscipit, quo quas.
                Magnam, cumque optio repellendus, repellat ab ea tenetur rerum facilis nulla quam error nostrum et dolorum voluptatum delectus commodi est sapiente, soluta nihil earum laboriosam. Enim obcaecati autem laborum debitis.
                Dolor sit ipsum delectus explicabo iusto distinctio. Consequuntur assumenda porro ratione deleniti esse aliquam expedita vitae! Eos eligendi totam tempora harum consequatur, fugit, repellendus quam iusto quibusdam ex blanditiis dolorem!
                Neque sapiente quod delectus mollitia excepturi, eveniet hic, laudantium possimus fuga doloribus fugiat! Commodi vel tenetur nihil facilis, modi dicta rem voluptatibus nobis eum provident possimus, debitis ullam ipsa fugiat.
                Deserunt porro, quis veritatis ratione corporis amet, optio, alias distinctio a eligendi inventore voluptates qui! Illo quod quibusdam nulla at quaerat officiis iure velit quos? Ullam consequuntur iusto doloribus voluptatem.
                Quidem eveniet nam itaque consequuntur consectetur quod exercitationem impedit quo incidunt. Accusamus totam dicta amet deleniti! Dolorem eligendi, suscipit beatae ratione sapiente, quae nostrum doloremque obcaecati facere molestiae cupiditate nesciunt!
                Cum ipsa, iste obcaecati consequatur nam velit quae vero ipsum eum laudantium est magnam blanditiis enim dignissimos? Tempora, vero nam molestias pariatur aliquid perferendis ipsum sed. Neque atque molestias labore.
                Dolor porro dolorem doloribus modi id sapiente veniam illum laudantium sequi, impedit excepturi iure harum animi aperiam eos esse dolore reprehenderit facilis deserunt in tenetur aliquam quibusdam est. Iure, et.
                Rerum alias rem esse facilis corporis reiciendis dolore laudantium amet debitis, dolor eveniet id adipisci pariatur, unde totam facere sapiente voluptate laboriosam dolorum, commodi est. Explicabo similique illo cupiditate aliquam?
                Asperiores eius minus porro expedita animi excepturi omnis earum ab nostrum pariatur nam facilis, perferendis obcaecati dolorem, debitis iusto vel aliquam harum! Modi exercitationem in ullam nemo vero molestias officiis.
                Pariatur eveniet reprehenderit vel vitae assumenda sequi quisquam vero ad voluptates sapiente nostrum, harum fugit esse tempore totam sed consequatur dignissimos ipsum. Eveniet libero ad ratione maxime nostrum officiis animi?
                Corrupti, incidunt ratione, quaerat voluptates, adipisci doloribus dolor soluta nobis provident cum repellendus mollitia inventore libero! Fugit blanditiis similique, quia veniam voluptatum, sint, ipsum animi vel consequatur aliquam sunt? Assumenda.
                Ipsam vel earum distinctio saepe fugiat ea rerum? Autem asperiores, ipsum reprehenderit voluptatibus iste nulla voluptate quos ratione repellat obcaecati, iusto reiciendis accusamus, itaque unde suscipit. Velit voluptatum sit hic!
                Dignissimos odit, maiores alias, praesentium neque suscipit facere omnis fugiat ullam natus tempora ducimus cumque doloremque! Nemo eaque, at ea distinctio tempora sunt eos, dignissimos fuga voluptates, magni maxime perspiciatis.
                Voluptatum debitis similique nihil aspernatur dolorum aperiam accusamus, quidem praesentium suscipit totam, aliquid nemo adipisci ducimus exercitationem nulla magnam ut voluptatibus saepe accusantium! Ipsum quisquam corporis nam esse sit tempore.
                Temporibus, facilis? Rerum repellendus aspernatur consectetur sit veniam, eum et! Repellat fugit id expedita quisquam maiores iste, quia optio, hic eveniet saepe dicta est, quidem iusto cum deserunt ullam totam.
                Sit accusantium possimus magni unde consequatur, veritatis vitae doloribus repellendus eum ratione provident minus ab molestiae aut similique? Totam qui iste delectus soluta, molestias neque. Eius debitis officiis mollitia a?
                Eius ea nemo minima vero fuga aperiam dolores quod quas impedit iste. Maiores dolore eius, modi dicta voluptates illo molestias quaerat optio? Quo cumque cupiditate enim tenetur, modi consequuntur ullam!
                Inventore accusamus, fuga nihil nesciunt quam pariatur, voluptatum explicabo, magni nostrum cum tempora culpa beatae fugit provident nobis velit perspiciatis. Rerum, magni obcaecati. Eos quaerat iusto quas labore quidem perspiciatis?
                Incidunt in quasi accusantium eaque, esse pariatur accusamus dolor nobis fuga vel saepe recusandae voluptates voluptatibus, omnis laborum natus dolore exercitationem vero est, cupiditate nemo quam optio! Distinctio, voluptatum dicta?
                Tempora minus perspiciatis molestias natus, reiciendis culpa fuga nulla voluptate ea, odit illum aut. Quo, praesentium doloribus non ut, soluta et sint aliquid minus, cum omnis ipsa sunt temporibus amet.
                Odio sit dolorum quis nihil a aliquid laudantium ipsa, dolorem ab accusantium repellat architecto earum corrupti soluta ipsum laborum tenetur nesciunt? Dicta omnis aliquam minus provident distinctio obcaecati quis exercitationem!
                Neque veniam sunt mollitia totam numquam dolore eaque quia, nam modi, id aut. Accusantium, quidem reprehenderit. Quo perspiciatis eligendi animi voluptatem cum beatae, distinctio quidem dolorem nam unde velit inventore!
                Reiciendis quisquam impedit placeat harum at eius culpa nam? Ex veniam vel possimus aspernatur sunt est debitis fuga ad deleniti, magni magnam distinctio dignissimos provident explicabo, corporis, iusto fugiat excepturi?
                Non incidunt quod consequatur sed corrupti perspiciatis tempora officia esse, cumque blanditiis, consectetur nobis provident asperiores sunt aspernatur quasi sint dolores error eaque deserunt nesciunt odio? Iusto esse eos dignissimos.
                Minima perspiciatis ducimus recusandae illo rem repudiandae error, enim labore, amet voluptatem, tempore deserunt sint. Quos vero dolorum ipsum mollitia perferendis. Amet illum et quaerat maiores minus. Exercitationem, velit a.
                Excepturi, expedita officiis! Quia nobis quasi in totam dolore, corporis iure cumque debitis, sed delectus nemo velit explicabo quas impedit! Dignissimos, asperiores? Neque eum libero molestiae! Asperiores laboriosam iusto ipsa.
                Odio exercitationem quo eligendi sed, ab velit asperiores ipsa quis nisi nobis rerum voluptatibus ratione molestiae suscipit magni porro inventore. Possimus sunt illum, iure corrupti ipsum praesentium. Voluptas, nisi quos.
                Nostrum aspernatur vero modi aliquid mollitia porro sed aperiam nemo! Libero totam nesciunt id recusandae sint voluptatum illo earum nisi praesentium magnam suscipit, necessitatibus soluta itaque atque natus ducimus placeat.
                Tenetur eligendi ad hic, vero earum illum excepturi minus itaque saepe repudiandae eaque, sit aliquam nisi porro nesciunt officia incidunt libero iure magnam! Nostrum veritatis beatae nihil aspernatur. Vel, ducimus.
                Odit magnam corporis ut expedita cupiditate tenetur laudantium suscipit ipsa iure quos quam, aut fugiat in sapiente non odio culpa quas aliquid sit labore, blanditiis itaque. Architecto perferendis quas accusamus!
                Hic necessitatibus itaque, qui dolor quos autem voluptate nisi quo dicta, expedita nihil similique harum ipsa officiis eveniet voluptatibus consequatur maxime? Consequatur mollitia dolores ipsa voluptatibus illum perspiciatis minima reprehenderit.
                Quia neque illum necessitatibus facilis quas ut quidem expedita a alias eum nam inventore, fugit, soluta modi. Facilis facere quae, atque, vel harum ab amet, perferendis odit ipsa provident ipsam!
                Voluptatem dicta, quae optio saepe eligendi doloribus eius nostrum quas. Rem eum sed, odio quibusdam repellendus at facilis sequi eaque perspiciatis tempora eveniet! Pariatur doloribus magni perferendis provident esse quod!
                Quo temporibus repudiandae ut, nam quas, laborum ipsa doloremque quisquam recusandae eaque reprehenderit corporis in accusantium error exercitationem, atque mollitia asperiores cumque! Voluptatem reiciendis ut explicabo possimus debitis numquam. Vero.
                Tempora rem, tenetur laboriosam doloremque enim provident ipsa omnis molestiae quae cum! Laboriosam nostrum perferendis accusantium atque tempore vero dolores. Mollitia saepe repudiandae ipsa, id consequatur vero excepturi ab adipisci.
                Dolore atque sunt odit est nulla voluptas numquam delectus quaerat excepturi quidem placeat neque, obcaecati quam, optio sequi eos explicabo, fuga perferendis! Excepturi placeat aspernatur dolorum repellat nobis aperiam consequuntur.
                Pariatur quam commodi doloribus earum sit accusantium nemo sequi quasi, cum illo ad. Quis non hic pariatur, laboriosam tempora veritatis asperiores quo fuga odio, delectus enim unde dolorem exercitationem id!
                Culpa eius voluptatibus commodi fugit quam incidunt ducimus expedita similique rerum, corrupti vero iste libero. Eos doloremque praesentium unde assumenda voluptatum! Inventore iure iusto eligendi exercitationem vitae tempora dolor perferendis?
                Voluptate quae possimus assumenda accusamus debitis eos, itaque pariatur harum eius omnis corporis in, suscipit amet placeat, velit sed deserunt et doloremque ab odit optio veniam. Ratione ut blanditiis laudantium.
                Delectus eaque et aperiam eligendi dolore eveniet animi aliquam numquam? Ipsum reprehenderit facere soluta, quas nostrum vero quo doloribus eum sint. Placeat facere fuga accusantium natus aliquam obcaecati assumenda laudantium!
                Corporis mollitia, magnam reprehenderit iste exercitationem eum rerum voluptatem asperiores alias voluptatum. Pariatur unde nam aspernatur eveniet esse vitae harum id atque! Rem commodi fuga pariatur hic error illo incidunt?
                Veniam veritatis quod eos at porro quam consequuntur placeat harum, voluptas sed, rem rerum. Magnam nam excepturi facere similique, ratione quasi quidem? Illo, hic! Amet est facilis magnam iusto quas.
                In, eius quam accusantium dolore harum doloribus eligendi, aut similique velit adipisci tempora maxime. Aut quibusdam mollitia voluptate repellendus soluta dignissimos eligendi, laudantium eaque ad odit accusantium vel minus reprehenderit!
                Voluptatibus quidem quaerat inventore suscipit exercitationem enim incidunt hic unde id expedita, earum tenetur debitis odit labore repudiandae voluptates aliquam optio maiores? Ducimus dolore pariatur sequi tenetur, culpa ea nemo.
                Quidem explicabo delectus inventore, magnam esse accusamus laboriosam voluptates quas recusandae voluptatem incidunt, ex, natus unde. Pariatur illo excepturi voluptate nemo, beatae maiores, quibusdam perspiciatis porro culpa magnam repellat dignissimos?
                Dolore, quisquam illum necessitatibus hic temporibus quos fuga. Nihil commodi repudiandae sint ratione mollitia officiis asperiores harum ex dignissimos ab perferendis, vero in quasi dolorum voluptatem vitae, corrupti unde ad.
                Veniam iure doloribus debitis maiores! Illum architecto quisquam quis nemo quia laboriosam magnam esse consequuntur saepe corporis. Et quisquam, provident magni minima recusandae distinctio doloribus itaque! Doloremque vitae iusto nam.
                In et consequatur atque excepturi, veniam beatae vitae dolore quos deleniti saepe molestiae earum commodi iste aliquam sunt nisi ratione cupiditate sint sit, aperiam non, quidem a velit possimus. Exercitationem!
                Et mollitia nesciunt id obcaecati illum, illo, consequuntur rem laborum optio deleniti dolorem natus enim molestiae quasi ex doloribus porro maxime quia eligendi atque itaque fuga, reprehenderit corporis. Unde, quae!
                Modi non sequi consequuntur quod itaque ipsa delectus vero rerum alias, magnam maiores corporis veritatis voluptates suscipit dignissimos repudiandae aut molestiae animi illum illo minus voluptatibus doloremque exercitationem. Minus, nisi?
                Quae laborum eaque, quidem corporis animi excepturi expedita dignissimos aut ipsam cum ea? Obcaecati, officia eius deserunt, dolorum repellendus natus ratione nam dicta iure veniam expedita consectetur quis asperiores ducimus!
                Ducimus, incidunt sed ab dolores sint tenetur ipsam rem aspernatur maxime consequuntur reiciendis laborum! Quia, id est corporis, voluptates nisi asperiores ad quo deleniti a architecto tenetur voluptatibus possimus omnis!
                Fugiat provident sequi asperiores itaque ad voluptatibus dicta harum nobis, ipsum tempore voluptas alias quas! Asperiores in quisquam distinctio, minus corrupti dicta consectetur laboriosam cum esse omnis delectus voluptates modi!
                Vero et est optio quo nesciunt eaque sunt, in veritatis illo laborum. Mollitia harum distinctio libero vero eaque labore, quo atque tempore qui amet similique sunt a sint praesentium ut.
                Dicta tempore inventore quos quasi dolores, deleniti id blanditiis eius eum. Optio voluptate alias, accusamus dicta perspiciatis amet, dolorem officia consequuntur odit cum, saepe aliquid! Dolor esse ipsum voluptates ex!
                In perferendis, aspernatur maiores mollitia similique libero iure iste ut eos sunt. Repellendus est ullam suscipit deserunt accusantium, odio facilis? Suscipit rerum ipsam odio vero omnis iusto. Unde, perferendis illo.
                Reprehenderit iure adipisci ex explicabo aperiam necessitatibus ut, reiciendis cum maiores neque natus nihil deleniti quis ipsam quasi unde vel eaque! Natus pariatur ea est nulla reprehenderit odio aut corporis!

            </p>
            <Row>

                {[...Array(10).keys()].map((value, i) => {
                    return (
                        <Col md={12} className="m-2">
                            <Comment key={i}></Comment>
                        </Col>
                    )

                })
                }
            </Row>

        </Container>
    )
}
export default PostDetail