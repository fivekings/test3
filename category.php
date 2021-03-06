<?php
/**
 * Displays a category list
 *
 * @package Angle
 * @subpackage Frontend
 * @since 0.1
 *
 * @copyright (c) 2014 Oxygenna.com
 * @license http://wiki.envato.com/support/legal-terms/licensing-terms/
 * @version 1.7.4
 */

get_header();
oxy_blog_header( single_cat_title( '', false ), category_description() ); 
$blog_decoration = oxy_get_option('blog_header_decoration');?>
<section class="section <?php echo oxy_get_option('blog_swatch'); ?>">
    <?php echo oxy_section_decoration( 'top', $blog_decoration ); ?>
    <div class="container">
        <div class="row">
            <?php get_template_part( 'partials/loop' ); ?>
        </div>
    </div>
</section>
<?php get_footer();